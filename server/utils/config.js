require("dotenv").config()

const MONGOURL = process.env.MONGODB_URI
const PORT = process.env.PORT

module.exports = {
    MONGOURL,
    PORT
}