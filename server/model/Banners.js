const mongoose = require("mongoose");

const BannersSchema = new mongoose.Schema({
  img: {
    type: String
  }
})

const Banners = mongoose.model("Banners", BannersSchema);

module.exports = Banners