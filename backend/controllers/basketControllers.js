const Basket = require('../models/Basket');
const Product = require('../models/Product');

const getProducts = async (req, res) => {
  const userId = req.query.uid;
  try {
    let basket = await Basket.findOne({ userId });
    if (basket && basket.items.length > 0) {
      res.send(basket);
    } else {
      res.send(null);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong', error: err });
  }
};

module.exports = {
  getProducts,
};
