const Basket = require('../models/Basket');
const Product = require('../models/Product');

const getProducts = async (req, res) => {
  const userId = req.query.uid;
  try {
    let basket = await Basket.findOne({ userId });
    if (basket && basket.items.length > 0) {
      res.json(basket);
    } else {
      res.status(404).json({ msg: 'No basket for this user' });
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
      basket.total += quantity * price[2];
      basket.date_updated = Date.now();
      updatedBasket = await basket.save();
      return res.status(201).json(updatedBasket);
    } else {
      // no cart exists, create one
      const newBasket = await Basket.create({
        userId,
        items: [{ productId, name, quantity, price }],
        total: quantity * price[2],
      });
      return res.status(201).json(newBasket);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong', error: err });
  }
};

const removeProduct = async (req, res) => {
  const userId = req.query.uid;
  const { productId, basketId, quantity } = req.body;

  try {
    let basket = await Basket.findOne({ userId });
    if (basket._id == basketId) {
      await Basket.findByIdAndDelete(basketId);
      return res.status(202).json({ msg: 'Basket deleted' });
    }
    let itemIndex = basket.items.findIndex(
      (item) => item.productId == productId
    );
    if (itemIndex > -1) {
      let productItem = basket.items[itemIndex];
      if (productItem.quantity > quantity) {
        productItem.quantity -= quantity;
        basket.total -= quantity * productItem.price[2];
        basket.items.splice(itemIndex, 1, productItem);
      } else {
        basket.total -= productItem.quantity * productItem.price[2];
        basket.items.splice(itemIndex, 1);
      }
    }
    basket.date_updated = Date.now();
    if (basket.items.length < 1) {
      await basket.delete();
      return res.status(202).json({ msg: 'Basket deleted' });
    } else {
      updatedBasket = await basket.save();
      return res.status(202).json(updatedBasket);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong', error: err });
  }
};

module.exports = {
  getProducts,
  addProduct,
  removeProduct,
};
