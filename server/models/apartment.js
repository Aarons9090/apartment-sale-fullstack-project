const mongoose = require("mongoose")

const apartmentSchema = mongoose.Schema({
    address: String,
    city: String,
    price: String,
    area: String,
    description: String,
    seller: String,
    apartmentType: String
})

apartmentSchema.set("toJSON", {
    transform: (document, returnedObj) => {
        returnedObj.id = returnedObj._id.toString()
        delete returnedObj.__v
        delete returnedObj._id
    }
})

const Apartment = mongoose.model("Apartment", apartmentSchema)

module.exports = Apartment