const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  img: {
    type: String
  },
  description: {
    type: String
  }
})

const Member = mongoose.model("Members", MemberSchema);

module.exports = Member