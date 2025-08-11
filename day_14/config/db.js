// db.js
require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
   console.log('✅ Connected to MongoDB successfully!'); // 👈 debug instead of console.log
  } catch (error) {
    console.log('❌ MongoDB connection error:', error.message); // 👈 debug for error
    process.exit(1);
  }
};

module.exports = connectDB;