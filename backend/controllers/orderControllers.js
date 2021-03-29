const Order = require('../models/Order');
const Basket = require('../models/Basket');
const User = require('../models/User');

const getOrders = async (req, res) => {
  const userId = req.query.uid;
  try {
    const orders = await Order.find({ userId }).sort({ date: -1 });
    res.status(201).json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
};

const checkout = async (req, res) => {
  try {
    const userId = req.query.uid;
    const { source } = req.body;
    let basket = await Basket.findOne({ userId });
    let user = await User.findOne({ _id: userId });
    const email = user.email;
    if (basket) {
      const charge = Math.random() < 0.5;
      if (!charge) throw Error("Payment failed (it's random for this example)");
      if (charge) {
        const order = await Order.create({
          userId,
          items: basket.items,
          total: basket.total,
        });
        const data = await Basket.findByIdAndDelete({ _id: cart.id });
        return res.status(201).json(order);
      }
    } else {
      res.status(500).json({ msg: 'Basket is empty' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error', error: err });
  }
};

module.exports = {
  getOrders,
  checkout,
};
