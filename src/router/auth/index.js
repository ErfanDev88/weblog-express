import { Router } from "express";
import { sendOtpValidation, verifyCodeValidation } from "./validation.js";
import controller from "./controller.js";

const auth = Router();

auth.post("/send-otp", sendOtpValidation, controller.sendOtp)
auth.post("/verify-otp", verifyCodeValidation, controller.verifyOtp)

export default auth