const mongoose = require("mongoose")

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || "mongoDB://localhost:27017/TodoApp")

module.exports= {mongoose}