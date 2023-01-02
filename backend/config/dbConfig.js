
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Mathias123:Mathias123@cluster0.mzyay.mongodb.net/Bus_Booking');

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo Db Connection Successfull");
});

db.on("error", () => {
  console.log("Mongo Db Connection Failed");
});
