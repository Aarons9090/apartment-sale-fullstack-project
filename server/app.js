const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const config = require("./utils/config")
const middleware = require("./utils/middleware")
require("express-async-errors")

mongoose.connect(config.MONGOURL)
    .then(() => {
        console.log("Connected to Database")
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err)
    })


app.use(cors())
app.use(express.static("build"))
app.use(express.json())

app.use(middleware.unknownRequest)
app.use(middleware.errorHandler)

module.exports = app