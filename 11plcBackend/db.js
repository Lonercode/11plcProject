require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set("strictQuery", false)
mongoose.connect(process.env.DB)
db = mongoose.connection

db.on('error', (err) => console.log(`You have the error ${err}`))
db.once('open', () => console.log("Database Connected"))

module.exports = db