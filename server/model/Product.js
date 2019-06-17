const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    price : Number,
    pic: String
})

const product = mongoose.model('product', productSchema, "products")

module.exports = product