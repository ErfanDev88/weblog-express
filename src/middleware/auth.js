import jwt from "jsonwebtoken";
import config from "config";
import { User } from "../models/user.js";

export default async function Authorzation(req, res, next) {
  try {
    const token = req.headers.x_auth_token;
    const verify = jwt.verify(token, config.get("jwt.secret"));
    const user = await User.findById(verify.id);
    req.user = user.id;
    next()
  } catch (error) {
    return res.status(401).send("Access denied");
  }
}