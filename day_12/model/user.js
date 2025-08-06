const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/loginSystem")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Connection error:", err));

// Define schema
const userSchema = mongoose.Schema({
  userName: String,
  email: String,
  age: Number,
  password: String
});

// Export model
module.exports = mongoose.model("User", userSchema);