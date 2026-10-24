import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import config from "config";

export default async function GenerateJwt(phone) {
  const user = await User.findOne({ phone });

  const payload = { id: user.id };
  const token = await jwt.sign(payload, config.get("jwt.secret"));
  return token;
}