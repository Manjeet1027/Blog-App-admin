const mongoose = require("mongoose");
const dotenv = require("dotenv");

//env config
dotenv.config();


const connectDB = async () => {
  mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("DB connection error:", err));
};

module.exports = connectDB;