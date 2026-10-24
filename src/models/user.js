import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
});


export const User =
  mongoose.models.User || mongoose.model("User", userSchema);