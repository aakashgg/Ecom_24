import express from "express";
import { testController, loginController, registerController } from "../controllers/authController.js";
const router = express.Router();
import { isAdmin, requireSignIn } from "../middlewares/authmid.js";
router.post("/register", registerController);
router.post("/login", loginController);
router.get("/test", requireSignIn, isAdmin, testController);
export default router;