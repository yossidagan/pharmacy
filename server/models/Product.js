const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    desc: String,
    price: Number,
    isTopProduct: Boolean,
    quantity: Number,
    pic: String
})

const product = mongoose.model('product', productSchema, "Products")

module.exports = product