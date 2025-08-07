// model/post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxlength: [100, "Title too long"]
  },
  content: {
    type: String,
    required: [true, "Content is required"],
    maxlength: [1000, "Content too long"]
  },
  image: {
    type: String,
    default: "https://via.placeholder.com/300x180/1f1f1f/333?text=No+Image"
  },
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

postSchema.index({ user: 1, createdAt: -1 });

module.exports = mongoose.model("Post", postSchema);