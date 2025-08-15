import { Router } from "express";

import {
  loginController,
  registerController,
} from "../Controllers/auth.controller.js";

const router = Router();

/**
 * @name POST /user
 * @description register new user (name, email, password, role)
 */

router.post("/register", registerController);

router.post("/login", loginController);

const authRoutes = router;
export default authRoutes;
