import { body } from "express-validator";

export const sendOtpValidation = [
  body("phone", "phone must be string, phone is required")
    .isString()
    .notEmpty(),
];

export const verifyCodeValidation = [
  body("phone", "phone must be string, phone is required")
    .isString()
    .notEmpty(),
  body("code", "code must be string , code is required").isString().notEmpty(),
];
