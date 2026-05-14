const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://new_user:sonu1234@cluster0.vgzcqfy.mongodb.net/lithiumDB",
  );

  console.log("DB connected");
}

module.exports = connectDB;
