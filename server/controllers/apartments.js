const apartmentsRouter = require("express").Router()
const Apartment = require("../models/apartment")
require("express-async-errors")

apartmentsRouter.get("/", async (request, response) => {
    const apartments = await Apartment.find({})
    response.json(apartments)
})

apartmentsRouter.get("/cities", async (request, response)=> {
    const apartments = await Apartment.find({})
    const cities = apartments.map(apartment => apartment.city)
    const uniqueCities = [...new Set(cities)]
    return uniqueCities.json()
})

apartmentsRouter.post("/", async (request, response) => {
    const body = request.body

    const apartment = new Apartment({
        address: body.address,
        city: body.city,
        price: body.price,
        area: body.area,
        description: body.description,
        seller: body.seller,
        apartmentType: body.apartmentType,
        image: body.image,
        oneLiner: body.oneLiner,
        year: body.year,
    })

    const savedApartment = await apartment.save()
    response.status(201).json(savedApartment)
})

apartmentsRouter.delete("/:id", async (request, response) => {
    const apartment = await Apartment.findById(request.params.id)

    if(!apartment){
        return response.status(204).end()
    }
    
    await Apartment.findByIdAndRemove(request.params.id)
    response.status(204).end()
})

module.exports = apartmentsRouter