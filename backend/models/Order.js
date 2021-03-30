const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
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
        default: 1,
      },
      price: [Number],
    },
  ],
  total: {
    type: Number,
    required: true,
    default: 0,
  },
  date_created: {
    type: Date,
    required: true,
  },
  date_ordered: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;
