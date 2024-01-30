const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subscribe = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },

    verified: {
        type: Boolean,
        default: false
    }
})



module.exports = mongoose.model('Subscribers', subscribe)