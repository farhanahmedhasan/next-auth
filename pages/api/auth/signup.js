import { connectToMongoDB } from "../../../lib/db";
import User from "../../../models/userModel";

const handler = async (req, res) => {
  connectToMongoDB();

  try {
    const user = await User.create(req.body);
    user.password = undefined;
    user.__v = undefined;

    return res.status(201).json({
      status: "success",
      message: "Account has been created",
      data: {
        user,
      },
    });
  } catch (error) {
    return res.status(401).json({
      status: "fail",
      error: error,
      message: error.message,
    });
  }
};

export default handler;
