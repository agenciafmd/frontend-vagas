const mongoose = require("mongoose")

const connectDB = async () => {
  await mongoose.connect(process.env.DB_CONNECT,()=>console.log('connnect to db!')
  )
}

module.exports = connectDB