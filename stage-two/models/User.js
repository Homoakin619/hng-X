const mongoose = require('mongoose')
const {Schema, model} = mongoose

const UserSchema = new Schema({
    _id: {
        type: Number,
        // required: [true,'id is required']
    },
    name: {
        type: String,
        required: [true, 'Please enter a name']
    }
})



const User = model('User',UserSchema)

module.exports = User