const mongoose = require('mongoose');
const BasketSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  items: [
    {
      productId: {
        type: String,
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.'],
        deafult: 1,
      },
      price: Number,
    },
  ],
  total: {
    type: Number,
    required: true,
    default: 0,
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
});

const Basket = mongoose.model('basket', BasketSchema);

module.exports = Basket;
