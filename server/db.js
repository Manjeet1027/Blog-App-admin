const mongoose = require("mongoose");
const dotenv = require("dotenv");

//env config
dotenv.config();


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB")
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`);
  }
};

module.exports = connectDB;