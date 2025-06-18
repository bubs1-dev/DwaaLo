//Purana wala
 import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.

// import mongoose from "mongoose";
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ MongoDB Connected to Atlas");
//   } catch (error) {
//     console.error("❌ MongoDB Connection Error:", error.message);
//     process.exit(1);
//   }
// };
// export default connectDB;
// // module.exports = connectDB;