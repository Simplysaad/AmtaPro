import express, { Router  } from "express";
import mongoose from "mongoose"

import Player from "../Models/player.model.js"
import Club from "../Models/club.model.js"
import players from "../Models/players.js"

const router = Router()


router.get("/", async (req, res, next) => {
  try {
    const allPlayers = await Player.find();

    return res.status(201).json({
      success: true,
      message: "new players added",
      data: allPlayers,
    });
  } catch (err) {
    next(err);
  }
});


export default router;
