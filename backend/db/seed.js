require('dotenv').config();

const productData = require('.db/data/products');
const userData = require('.db/data/users');
const orderData = require('.db/data/orders');

const connect = require('./db/config/connect.js');

const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');
const Basket = require('./models/Basket');

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
    await Order.insertMany(orderData);

    console.log('Database seeded');

    process.exit();
  } catch (error) {
    console.error('Error importing data', error);
    process.exit(1);
  }
};

importData();
