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

const createOrder = async (req, res) => {
  try {
    const userId = req.query.uid;
    let basket = await Basket.findOne({ userId });
    // let user = await User.findOne({ _id: userId });
    // const email = user.email;
    if (basket) {
      const charge = true;
      if (!charge) {
        return res
          .status(400)
          .json({ msg: "Payment failed (it's random for this example)" });
      }
      if (charge) {
        const order = await Order.create({
          userId,
          items: basket.items,
          date_created: basket.date_created,
          total: basket.total,
        });
        const data = await Basket.findByIdAndDelete({ _id: basket.id });
        return res.status(201).json(order);
      }
    } else {
      res.status(500).json({ msg: 'Basket is empty or not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error', error: err });
  }
};

module.exports = {
  getOrders,
  createOrder,
};
