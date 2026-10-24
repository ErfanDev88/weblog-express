import mongoose from "mongoose";
import config from "config";

export default async function ConnectToDB() {
  try {
    mongoose.connect(config.get("database.address"));
    console.log("App Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
