import express, { Router  } from "express";
import mongoose from "mongoose"

import Player from "../Models/player.model.js"
import Club from "../Models/club.model.js"
import players from "../Models/players.js"

const router = Router()


router.post("/", async (req, res, next)=>{
try {
    const newPlayers = await Player.insertMany(players)

    return res.status(201).json({
        success: true,
        message: "new players added",
        data: newPlayers
    })
} catch (err) {
    next(err)
}
})


export default router;
