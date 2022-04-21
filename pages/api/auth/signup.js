import User from "../../../models/userModel";
import { connectToMongoDB } from "../../../lib/db";
import { createSendToken } from "../../../lib/auth";

const handler = async (req, res) => {
  if (req.method !== "POST") return;

  try {
    connectToMongoDB();
    const user = await User.create(req.body);
    createSendToken(res, 201, user);
  } catch (error) {
    return res.status(401).json({
      status: "fail",
      error: error,
      message: error.message,
    });
  }
};

export default handler;
