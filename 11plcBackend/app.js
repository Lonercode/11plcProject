const express = require('express')
const app = express()
const Routes = require('./routes/subscribers.routes')
const cors = require('cors')
const path = require('path')

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.json({message: "This is the Server"})
})
app.use('/plc', Routes)

module.exports = app