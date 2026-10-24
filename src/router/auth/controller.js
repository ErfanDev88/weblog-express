import { Otp } from "../../models/otp.js";
import { User } from "../../models/user.js";
import generateOtp from "../../utils/generateOtp.js";
import GenerateJwt from "../../utils/generateJwt.js";
// import SmsSender from "../../utils/smsSender.js";
// import GenerateProfile from "../../utils/generateProfile.js";

export default new (class {
  async sendOtp(req, res) {
    const { phone } = req.body;

    const exists = await User.findOne({ phone: phone });
    if (!exists) await User.create({ phone });

    const otp = await generateOtp(phone);
    if (!otp) res.status(401).send("Acces denied , please wait!!!");
    // const sms = await SmsSender(phone, otp);
    // if (!sms) return res.status(500).send("Internal Server Error.....");
    return res.json({
      msg: "Otp sent",
      code: otp,
    });
  }

  async verifyOtp(req, res) {
    const { phone, code } = req.body;
    const exists = await Otp.findOne({ key: phone });
    if (!exists) res.status(400).send("Invalid Code!!!");
    await exists.deleteOne();
    const token = await GenerateJwt(phone);
    // await GenerateProfile(phone);
    return res.json({
      msg: "Otp Verified",
      token: token,
    });
  }
})();