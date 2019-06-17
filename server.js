const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const mongoose = require('mongoose')
const axios = require('axios')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pharmacy-proj", {
    useNewUrlParser: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static(path.join(__dirname, 'server/socket-com')))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
app.use('/', api)


const port = 8000
let server = app.listen(process.env.PORT || port, function () {
    console.log(`Server running on ${port}`)
})

