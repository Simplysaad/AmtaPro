import { Router } from "express";
import bcrypt from "bcryptjs";
import crypto from "crypto"
import jwt from "jsonwebtoken"



import User from "../Models/user.model.js"

const router = Router();

/**
 * @name POST /user
 * @description register new user (name, email, password, role)
 */

router.post("/user", async (req, res, next) => {
  try {
    const {
      name,
      emailAddress,
      password,
      role = "athlete",
    } = req.body;
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
      role,
      password: hashedPassword,
    });

    if(newUser.role === "admin"){
        newUser.api_key = crypto.randomBytes(32).toString("hex")
        console.log(newUser.api_key);
    }
     await newUser.save();

    console.log(req.session)
    req.session.userId = newUser._id;
    let token = jwt.sign({userId: newUser._id}, process.env.SECRET_KEY);

    res.cookie("token", token)


    return res.status(201).json({
      success: true,
      message: "new user created",
      data: {
        newUser,
      },
    });
  } catch (err) {
    next(err);
  }
});

export default router;
