import { Router } from "express";
import Authorzation from "../../middleware/auth.js";

const router = Router();

router.use(Authorzation)

router.get("/", (req, res) => {
  res.send("This is profile");
});

export default router;