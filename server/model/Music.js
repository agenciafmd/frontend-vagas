const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  img: {
    type: String
  },
  description: {
    type: String
  },
  url: {
    type: String
  }
})

const Music = mongoose.model("Music", MusicSchema);

module.exports = Music