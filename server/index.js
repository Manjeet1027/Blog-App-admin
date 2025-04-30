const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const cookieParser = require("cookie-parser");
//env config
dotenv.config();

//router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//mongodb connection
connectDB();

//rest objecct
const app = express();

app.use(cookieParser());
app.use(express.json());

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));


// app.use(morgan("dev"));

// //routes
app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);

app.use("/", (req, res) => {
  res.send("Server is Live")
});

// Port
const PORT = process.env.PORT || 8000;
//listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV} mode port no ${PORT}`
  );
});