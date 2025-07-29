import express, { Router } from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import Athlete from "../Models/athlete.model.js";
import User from "../Models/user.model.js";
import Club from "../Models/club.model.js";
import athletes from "../Models/athletes.js";

import authMiddleware from "../Middlewares/auth.middleware.js";

const router = Router();

router.get("/athletes", async (req, res, next) => {
  try {
    let {
      positions,
      nationality,
      min_age,
      max_age,
      min_height,
      max_height,
      min_weight,
      max_weight,
    } = req.query;

    let filters = {};

    if (positions && Array.isArray(positions)) {
      filters.positions = { $in: positions };
    } else if (positions) {
      filters.positions = positions;
    }

    if (nationality) {
      filters.nationality = nationality;
    }

    if (min_age || max_age) {
      filters["physical.age"] = {};
      if (min_age && !isNaN(parseInt(min_age)))
        filters["physical.age"].$gte = parseInt(min_age);
      if (max_age && !isNaN(parseInt(max_age)))
        filters["physical.age"].$lte = parseInt(max_age);
    }

    if (min_height || max_height) {
      filters["physical.height"] = {};
      if (min_height && !isNaN(parseInt(min_height)))
        filters["physical.height"].$gte = parseInt(min_height);
      if (max_height && !isNaN(parseInt(max_height)))
        filters["physical.height"].$lte = parseInt(max_height);
    }

    if (min_weight || max_weight) {
      filters["physical.weight"] = {};
      if (min_weight && !isNaN(parseInt(min_weight)))
        filters["physical.weight"].$gte = parseInt(min_weight);

      if (max_weight && !isNaN(parseInt(max_weight)))
        filters["physical.weight"].$lte = parseInt(max_weight);
    }

    const allAthletes = await Athlete.find(filters).populate("user");
    const count = await Athlete.countDocuments(filters);

    return res.status(200).json({
      success: true,
      message: `${count > 0 ? count : "no"} athletes retrieved`,
      filters,
      data: allAthletes,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/athletes/:id", async (req, res, next) => {
  try {
    const { id: athleteId } = req.params;
    const { userId: currentUserId } = req.session;

    const isCurrentUser = athleteId === currentUserId;

    const currentAthlete = await Athlete.findOne({
      $or: [{ _id: athleteId }, { user: athleteId }],
    })
      .populate("user")
      .select("-user.password");

    return res.status(200).json({
      success: true,
      message: "athlete info retrieved",
      data: { isCurrentUser, currentAthlete },
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @route POST /athletes
 * @description create a new athlete (bio, dob, height, weight, positions = [], nationality = "nigerian")
 */

router.post("/athletes", async (req, res, next) => {
  try {
    const {
      bio,
      dob,
      height,
      weight,
      positions = [],
      nationality = "nigerian",
    } = req.body;

    const { userId: user } = req.session;
    if (!user) {
      return res.status(403).json({
        success: false,
        message: "user not logged in",
      });
    }

    const currentAthlete = await Athlete.findOne({ user });
    if (currentAthlete) {
      return res.status(400).json({
        success: false,
        message:
          "athlete profile exists already, try editing it `PUT /athlete/:id`",
        data: {
          currentAthlete,
        },
      });
    }

    const newAthlete = new Athlete({
      user,
      bio,
      dob: new Date(dob),
      physical: {
        height: parseInt(height),
        weight: parseInt(weight),
      },
      positions,
      nationality,
    });

    console.log(newAthlete);

    await newAthlete.save();

    return res.status(201).json({
      success: true,
      message: "new athlete profile created",
      data: {
        newAthlete,
      },
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @route PUT /athletes/:id
 * @description edit athlete profile
 * @params (bio, dob, height, weight, positions = [], nationality = "nigerian")
 */

router.put(["/athlete/:id", "/athlete/"], async (req, res, next) => {
  try {
    const { bio, dob, height, weight, positions, nationality } = req.body;

    const { userId: user } = req.session;
    if (!user) {
      return res.status(403).json({
        success: false,
        message: "user not logged in",
      });
    }

    const updates = {};

    if (bio || dob || height || weight || nationality) {
      updates.$set = {};
      if (bio) updates.$set.bio = bio;
      if (dob) updates.$set.dob = new Date(dob);
      if (height) updates.$set["physical.height"] = parseInt(height);
      if (weight) updates.$set["physical.weight"] = parseInt(weight);
      if (nationality) updates.$set.nationality = nationality.toLowerCase();
    }
    if (positions) {
      const positionsArray = Array.isArray(positions) ? positions : [positions]
      updates.$addToSet = { positions: { $each: positionsArray } };
    }
    const updatedAthlete = await Athlete.findOneAndUpdate(
      { $or: [{ _id: user }, { user }] },
      updates,
      { new: true }
    );

    if (!updatedAthlete) {
      return res.status(404).json({
        success: false,
        message: "athlete profile does not exist",
      });
    }

    return res.status(201).json({
      success: true,
      message: "athlete profile edited successfully",
      data: {
        updates,
        updatedAthlete,
      },
    });
  } catch (err) {
    next(err);
  }
});

export default router;
