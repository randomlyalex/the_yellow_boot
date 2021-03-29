const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.query.pid);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
};

const postProduct = async (req, res) => {
  try {
    const newProduct = await new Product(req.body).save();
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.query.pid },
      req.body
    );
    const updatedProduct = await Product.findOne({ _id: product.id });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete({ _id: req.query.pid });
    res.status(204).json({ success: true });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
};

module.exports = {
  getProducts,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
};
