const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "title is required"],
    },
    content: {
      type: String,
      required: [true, "content is required"],
    },
    image: {
      type: String,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: [true, "user id is required"],
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;