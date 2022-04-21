import { serialize } from "cookie";
import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const setCookie = (token, res) => {
  const cookieOptions = {
    path: "/user",
    expires: new Date(Date.now() + process.env.JWT_COOKIES_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  // res.cookie("jwt", token, cookieOptions); isn't working in nextjs
  res.setHeader("Set-Cookie", serialize("jwt", token, cookieOptions));
};

export const createSendToken = (res, status, user) => {
  const token = signToken(user._id);
  setCookie(token, res);

  user.password = undefined;
  user._id = undefined;
  user.__v = undefined;

  return res.status(status).json({
    status: "success",
    message: "Account Created",
    token,
    data: {
      user,
    },
  });
};
