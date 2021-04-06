require('dotenv').config();

const productData = require('./data/productData');
const userData = require('./data/userData');
const connect = require('./config/connect');

const Product = require('../models/Product');
const User = require('../models/User');
const Basket = require('../models/Basket');
const Order = require('../models/Order');

connect();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await User.deleteMany({});
    await Order.deleteMany({});
    await Basket.deleteMany({});
    console.log('All DB data Deleted');

    await Product.insertMany(productData);
    await User.insertMany(userData);

    console.log('Database seeded');

    process.exit();
  } catch (error) {
    console.error('Error importing data', error);
    process.exit(1);
  }
};

importData();
