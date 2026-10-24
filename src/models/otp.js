import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true },
    code: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 10 });

export const Otp = mongoose.model("Otp", otpSchema);