import { validationResult } from "express-validator";

export default function validationData(req, res, next) {
  const errors = validationResult(req.body);

  if (!errors.isEmpty())
    return res.status(400).json({ msg: "bad request", errors: errors });

  next();
}