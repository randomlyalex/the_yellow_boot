const mongoose = require('mongoose');

const priceVal = (val) => {
  //check 3 integers for the price, and that RSP > COST > TAX
  return val.length == 3 && val[2] > val[0] && val[2] > val[1];
};

const dimVal = (val) => {
  //check 3 integers for the dimensions
  return val.length == 3;
};

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
    enum: ['MENS', 'WOMENS', 'KIDS'],
    required: true,
  },
  category2: {
    type: String,
    enum: ['OUTDOOR', 'SPORT', 'FORMAL', 'TRAINERS', 'SANDALS', 'BOOTS'],
    required: true,
  },
  // stock: [
  //   {
  //     size: String,
  //     stockCount: {
  //       type: Number,
  //       required: true,
  //       min: [0, 'Quantity can not be less then 0.'],
  //       default: 0,
  //     },
  //   },
  // ],
  imageUrls: {
    type: [String],
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
  package_dimensions_cm: {
    type: [Number],
    validate: [dimVal, 'L, W, H cm required'],
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
