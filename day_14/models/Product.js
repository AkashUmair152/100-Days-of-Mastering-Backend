// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  image: {
    type: String, // URL to image
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  bgColor: {
    type: String,
    default: '#ffffff'
  },
  panelColor: {
    type: String,
    default: '#f0f0f0'
  },
  textColor: {
    type: String,
    default: '#000000'
  }
}, {
  timestamps: true
});

// Index name and price for search/filter performance
productSchema.index({ name: 'text' });
productSchema.index({ price: 1 });

module.exports = mongoose.model('Product', productSchema);