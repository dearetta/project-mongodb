const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    age: Number,
    address: String
})

const User= mongoose.model("User", UserSchema)

module.exports = User