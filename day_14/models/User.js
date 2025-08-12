// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1
      }
    }
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'  // Assuming you'll have an Order model
    }
  ],
  contact: {
    type: String,
    trim: true
  },
  picture: {
    type: String, // URL to profile picture
    default: ''
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt
});

// Index email for faster queries
userSchema.index({ email: 1 });

module.exports = mongoose.model('User', userSchema);