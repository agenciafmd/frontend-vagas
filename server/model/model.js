const mongoose = require("mongoose");

const PodcastSchema = new mongoose.Schema({
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
  ep: {
    type: String
  },
  url: {
    type: String
  }
})

const Podcast = mongoose.model("Podcast", PodcastSchema);

module.exports = Podcast