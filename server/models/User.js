const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({

    firstName: String,
    surName: String,
    email: String,
    password: String,
    pic: String

})

const User = mongoose.model('User', userSchema, "Users")


module.exports = User