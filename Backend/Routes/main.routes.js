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

    const allAthletes = await Athlete.find(filters);
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
    // const { userId: currentUserId } = req.session;

    const isCurrentUser = false; //athleteId === currentUserId;

    const currentAthlete = await Athlete.findOne({ _id: athleteId })
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
 * @name POST /athletes
 * @description create a new athlete (name, email, password, physical)
 */
router.post("/athletes", async (req, res, next) => {
  try {
    const { name, emailAddress, password, nationality = "nigerian" } = req.body;

    if (!emailAddress || !password) {
      return res.status(400).json({
        success: false,
        message:
          "incomplete request: name, emailAddress or password not provided",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      emailAddress,
      nationality,
      role,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "new athlete profile created",
      data: {
        newUser,
      },
    });
  } catch (err) {
    next(err);
  }
});



export default router;
