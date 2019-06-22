const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const path = require("path");
const Product = require("../model/Product")
const nodemailer = require('nodemailer')
const sendmail = require('sendmail')();


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

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'milford.gislason@ethereal.email',
                pass: 'w2CpChbETV6SC7zbJU'
            },
            tls:{
                rejectUnauthorized:false
              }
        });

        let mailOptions = {
            from: "test@testaccount.com",
            to: 'milford.gislason@ethereal.email',
            subject: 'Node Contact Request', // Subject line
            text: 'Hello world?', // plain text body
            html: htmlMail // html body
        };
      

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);   
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
        });


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


