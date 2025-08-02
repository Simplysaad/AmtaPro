import express, { Router } from "express";
const router = Router()
import multer from "multer";
const upload = multer({ dest: "Uploads" });

//import cloudinary from "../Utils/cloudinary.js";

import Athlete from "../Models/athlete.model.js";
// import User from "../Models/user.model.js";
// import Scout from "../Models/scout.model.js"

import authMiddleware from "../Middlewares/auth.middleware.js";
const scouteRoutes = router
export default scouteRoutes 