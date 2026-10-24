import { Router } from "express";
import validationData from "../middleware/validation.js";

const router = Router()


router.use(validationData);

// router.use("/auth", auth)
// router.use("/profile", profile)

export default router