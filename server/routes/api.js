const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const path = require("path");
const Product = require("../model/Product")

const products = require('../data')

const getProductsFromDB = async () => Product.find({})


router.get('/sanity', function (req, res) {
    res.send('OK!')
})

router.get('/products', async function (req, res) {
    let products = await getproductsFromDB()
    res.send(products)
})

module.exports = router

const saveProduct = function () {
    for (let product of products) {
        const newproduct = new Product(product)
        let save = newproduct.save()
        save.then(console.log("saved"))
    }
}


saveProduct()


