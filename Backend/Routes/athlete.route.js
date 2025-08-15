import express, { Router } from "express";
import multer from "multer";
const upload = multer({ dest: "Uploads" });

//import cloudinary from "../Utils/cloudinary.js";

import Athlete from "../Models/athlete.model.js";
// import User from "../Models/user.model.js";
// import Scout from "../Models/scout.model.js"

// import authMiddleware from "../Middlewares/auth.middleware.js";
import {
  createNewAthlete,
  getAthletes,
  getSingleAthlete,
} from "../Controllers/athlete.controller.js";

const router = Router();

router.get("/", getAthletes);

router.get("/:id", getSingleAthlete);

/**
 * @route POST /athletes
 * @description create a new athlete
 * @param {String} (bio, nationality)
 * @param {Number}  (height, weight)
 * @param {Date}  dob
 * @param {String[]} positions
 * @tutorial should_use_authMiddleware,
 */

router.post("/", upload.single("profilePic"), createNewAthlete);

const athleteRoutes = router;
export default athleteRoutes;
