import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import athletes from "../Models/athletes.js";

import User from "../Models/user.model.js";

export const registerController = async (req, res, next) => {
  try {
    const { name, emailAddress, password, role } = req.body;
    if (!emailAddress || !password) {
      return res.status(400).json({
        success: false,
        message:
          "incomplete request: name, emailAddress or password not provided",
      });
    }

    const isUserExist = (await User.countDocuments({ emailAddress })) > 0;

    if (isUserExist) {
      return res.status(400).json({
        success: false,
        message: "email address already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      emailAddress,
      role,
      password: hashedPassword,
    });

    if (newUser.role === "admin") {
      newUser.api_key = crypto.randomBytes(32).toString("hex");
      // console.log(newUser.api_key);
    }
    await newUser.save();

    console.log(req.session);
    req.session.userId = newUser._id;
    let token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY);

    res.cookie("token", token);

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
};

export const loginController = async (req, res, next) => {
  try {
    const { emailAddress, password } = req.body;

    if (!emailAddress || !password) {
      return res.status(400).json({
        success: false,
        message: "email address or password missing",
      });
    }
    const currentUser = await User.findOne({ emailAddress });

    if (!currentUser) {
      return res.status(400).json({
        success: false,
        message: "email address does not exist",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      currentUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(403).json({
        success: false,
        message: "invalid credentials",
      });
    }

    const token = jwt.sign({ userId: currentUser._id }, process.env.SECRET_KEY);
    res.cookie("token", token);

    req.session.userId = currentUser._id;

    return res.status(200).json({
      success: true,
      message: "user logged in successfully",
      data: {
        currentUser,
      },
    });
  } catch (err) {
    next(err);
  }
};
