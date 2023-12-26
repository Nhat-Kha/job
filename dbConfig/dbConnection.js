import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URL);

    console.log("DB connection successfully");
  } catch (error) {
    console.log("DB connection failed, error: ", error);
  }
};

export default dbConnection;
