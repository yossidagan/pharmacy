const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const path = require("path");
const Product = require("../models/Product")
const nodemailer = require('nodemailer')
const sendmail = require('sendmail')();
const User = require("../models/User")

const users = require('../data')
const products = require('../data')

const getProductsFromDB = async () => Product.find({})
const getUsersFromDB = async () => User.find({})



router.get('/sanity', function (req, res) {
    res.send('OK!')
})

router.get('/products', async function (req, res) {
    let products = await getProductsFromDB()
    res.send(products)
})

router.get('/users', async function (req, res) {
    let users = await getUsersFromDB()
    res.send(users)
})

router.post('/sendMail', async function (req, res) {
    console.log(req.body)



    const htmlMail = `
        <div>Sender Text : ${req.body.text}</div>
        <div>Sender Age : ${req.body.age}</div>
        `

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'daganyy@gmail.com',
            pass: 'Drumcode29'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        to: "daganyy@gmail.com",
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: htmlMail // html body
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);

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
const saveUser = function () {
    for (let user of users) {
        const newUser = new User(user)
        let save = newUser.save()
        save.then(console.log("saved"))
    }
}


// saveProduct()
// saveUser()



