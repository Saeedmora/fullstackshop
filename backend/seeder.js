import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/producModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData= async()=>{
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createUser = await User.insertMany(users);
    const adminUser= createUsers[0]._id;

    const sampleProducts=products.map((product)=>{
      return{...Product,user:adminUser};
  });
  await Product.insertMany(sampleProducts);

  console.log('data imported!'.green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}
const destroyData=async() =>{
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log('data destroyed '.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2]==='-d'){
  destroyData();
}else{
  importData
}