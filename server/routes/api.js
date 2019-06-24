const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const path = require("path");
const Product = require("../models/Product")
const nodemailer = require('nodemailer')
const sendmail = require('sendmail')();
const User = require("../models/User")
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

const GoogleCloudStorage = require('@google-cloud/storage');
const GOOGLE_CLOUD_PROJECT_ID = 'pharmacy-244615'
const GOOGLE_CLOUD_KEYFILE = "../pharmacy-f11dba469826.json"



const users = require('../data')
const products = require('../data')

const getProductsFromDB = async () => Product.find({})
const getUsersFromDB = async () => User.find({})

cloudinary.config({ cloud_name: process.env.CLOUD_NAME, api_key: process.env.API_KEY, api_secret: process.env.API_SECRET });

const storage = cloudinaryStorage({ cloudinary: cloudinary, folder: "demo", allowedFormats: ["jpg", "png"] });
const parser = multer({ storage: storage });

// router.post('/api/images', parser.single("image"), (req, res) => {
//     console.log("ok")
//     console.log(req.file)
// })


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
        <div>${req.body.message.text}</div>
        <div>Developer Note : ${req.body.message.devNote}</div>
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
        to: req.body.email,
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



