import { Router } from "express";
import validationData from "../middleware/validation.js";
import auth from "./auth/index.js";
import profile from "./profile/index.js";
import { sendOtpValidation } from "./auth/validation.js";


const router = Router()

router.use(validationData);

router.use("/auth" ,sendOtpValidation,auth)
router.use("/profile", profile)

export default router