const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  type: String,
  price: Number,
  condition: String,
  contact: String,
  location: String,
  lat: Number,
  lng: Number,
  addedAt: {
    type: Number,
    default: Date.now
  }
});

module.exports = mongoose.model("Book", bookSchema);
