import axios from "axios";
import config from "config";

export default async function SmsSender(phone, otp) {
  const smsConfig = {
    method: "POST",
    url: "https://api.sms.ir/v1/send/verify",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
      "x-api-key": config.get("sms.apiKey"),
    },
    data: {
      mobile: phone,
      templateId: '341054',
      parameters: [{
        name: "CODE",
        value: otp.toString(),
      },]
    },
  };
  try {
    const result = await axios.request(smsConfig);
    return result;
  } catch (error) {
    return error;
  }
}