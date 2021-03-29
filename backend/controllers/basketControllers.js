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

const addProduct = async (req, res) => {
  const userId = req.query.uid;
  const { productId, quantity } = req.body;

  try {
    let basket = await Basket.findOne({ userId });
    let product = await Product.findOne({ _id: productId });
    if (!product) {
      res.status(404).json({ msg: 'Item not found' });
    }
    const { price, name } = product;

    if (basket) {
      // if cart exists for the user
      let itemIndex = basket.items.findIndex(
        (product) => product.productId == productId
      );

      // Check if product exists or not
      if (itemIndex > -1) {
        let productItem = basket.items[itemIndex];
        productItem.quantity += quantity;
        basket.items[itemIndex] = productItem;
      } else {
        basket.items.push({ productId, name, quantity, price });
      }
      for (i = 0; i < basket.total.length; i++) {
        basket.total[i] += quantity * price[i];
      }
      basket.date_updated = Date.now;
      basket = await basket.save();
      return res.status(201).json(basket);
    } else {
      // no cart exists, create one
      const newCart = await Cart.create({
        userId,
        items: [{ productId, name, quantity, price }],
        total: [quantity * price[0], quantity * price[1], quantity * price[2]],
      });
      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong', error: err });
  }
};

module.exports = {
  getProducts,
  addProduct,
};
