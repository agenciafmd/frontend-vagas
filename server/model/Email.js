const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
  email: {
    type: String
  },
  name: {
    type: String
  }
})

const Email = mongoose.model("Email", EmailSchema);

module.exports = Email