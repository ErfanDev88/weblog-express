import { User } from "../models/user.js";
import { Profile } from "../models/profile.js";

export default async function GenerateProfile(phone) {
  const user = await User.findOne({ phone });
  const profile = await Profile.findOne({ userID: user });
  if (!profile) await Profile.create({ userID: user, userName: user.phone });
}
