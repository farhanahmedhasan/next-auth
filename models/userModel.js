import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: [24, "Name is too big"],
    minlength: [3, "Name is too small"],
    required: [true, "Please Provide Your Name"],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: [true, "Please Provide Your Email"],
  },
  password: {
    type: String,
    minlength: [8, "Password should be more than 8 characters"],
    required: [true, "Please provide your password"],
    select: false,
  },
});

// DOCUMENT MIDDLEWARE
userSchema.pre("save", async function (next) {
  // Hash pass only when created pass or changing pass
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
