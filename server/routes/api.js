const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const path = require("path");
const Product = require("../model/Product")
const nodemailer = require('nodemailer')

const products = require('../data')

const getProductsFromDB = async () => Product.find({})


router.get('/sanity', function (req, res) {
    res.send('OK!')
})

router.get('/products', async function (req, res) {
    let products = await getProductsFromDB()
    res.send(products)
})

router.post('/sendMail', async function (req, res) {
    console.log(req.body)

    nodemailer.createTestAccount((err, account) => {

        const htmlMail = `
        <div>Sender Text : ${req.body.text}</div>
        <div>Sender Age : ${req.body.age}</div>
        `

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
              user: testAccount.user, // generated ethereal user
              pass: testAccount.pass // generated ethereal password
            }
          })
          

    });


})

module.exports = router

const saveProduct = function () {
    for (let product of products) {
        const newproduct = new Product(product)
        let save = newproduct.save()
        save.then(console.log("saved"))
    }
}


// saveProduct()


