const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    //double check this works with insomnia https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
    const products = await Product.find()
      .sort({ date: -1 })
      .then((products) => res.json(products));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const postProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    newProduct.save().then((product) => res.json(product));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateProduct = async (req, res) => {
  try {
    Product.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
      (product) => {
        Product.findOne({ _id: req.params.id }).then((product) => {
          res.json(product);
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    Product.findByIdAndDelete({ _id: req.params.id }).then((product) => {
      res.json({ success: true });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getProducts,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
};
