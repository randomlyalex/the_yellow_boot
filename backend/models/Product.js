const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category1: {
    type: String,
    enum: ['MEN', 'WOMEN', 'KIDS'],
    required: true,
  },
  category2: {
    type: String,
    enum: ['OUTDOOR', 'FASHION', 'SPORT', 'BUSINESS'],
    required: true,
  },
  taxCode: {
    type: String,
    enum: ['1', '2', '3', '4'],
    required: true,
  },
  price: {
    type: [Number],
    validate: [priceVal, 'COST, VAT, RSP required'],
    required: true,
  },
  weightkg: {
    type: Number,
    required: true,
  },
  sizeCm3: {
    type: Number,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

const priceVal = val => {
  //check 3 integers for the price, and that RSP > COST > TAX
  return val.length == 3 && val[2] > val[0] && val[2] > val[1];
};

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
