require('dotenv').config()
const app = require('./app')
const db = require('./db')

const PORT = process.env.PORT
app.listen(PORT, '0.0.0.0', () => {console.log(`Server listening on port ${PORT}`)})