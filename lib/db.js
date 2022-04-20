import mongoose from "mongoose";

const DB = process.env.DB_CONNECTION.replace("<PASSWORD>", process.env.DB_PASSWORD);

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
