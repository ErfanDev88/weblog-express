import { Otp } from "../models/otp.js";

export default async function generateOtp(phone) {
  const otp = Math.floor(Math.random() * 99999);
  const key = `${phone}`;
  let exists = await Otp.findOne({ key: key });
  if (exists) {
    const deadline = Date.now() - exists.createdAt > 600000;
    if (deadline) {
      exists.deleteOne();
    } else {
      return;
    }
  }
  exists = await Otp.create({ key, code: otp });
  return otp;
}