import express, { Router } from "express";
import mongoose from "mongoose";

import Player from "../Models/player.model.js";
import Club from "../Models/club.model.js";
import players from "../Models/players.js";

const router = Router();

router.get("/players", async (req, res, next) => {
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
      if (min_age && !isNaN(Number(min_age)))
        filters["physical.age"].$gte = Number(min_age);
      if (max_age && !isNaN(Number(max_age)))
        filters["physical.age"].$lte = Number(max_age);
    }

    if (min_height || max_height) {
      filters["physical.height"] = {};
      if (min_height && !isNaN(Number(min_height)))
        filters["physical.height"].$gte = Number(min_height);
      if (max_height && !isNaN(Number(max_height)))
        filters["physical.height"].$lte = Number(max_height);
    }

    if (min_weight || max_weight) {
      filters["physical.weight"] = {};
      if (min_weight && !isNaN(Number(min_weight)))
        filters["physical.weight"].$gte = Number(min_weight);

      if (max_weight && !isNaN(Number(max_weight)))
        filters["physical.weight"].$lte = Number(max_weight);

      return res.status(200).json({
        success: true,
        message: `${count > 0 ? count : "no"} players retrieved`,
        filters,
        data: allPlayers,
      });
    }
  } catch (err) {
    next(err);
  }
});

export default router;
