const apartmentsRouter = require("express").Router()
const Apartment = require("../models/apartment")
require("express-async-errors")

apartmentsRouter.get("/", async (request, response) => {
    const apartments = await Apartment.find({})
    response.json(apartments)
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
        apartmentType: body.apartmentType
    })

    const savedApartment = await apartment.save()
    response.status(201).json(savedApartment)
})

blogsRouter.delete("/:id", async (request, response) => {
    const apartment = await Apartment.findById(request.params.id)
    
    if(!apartment){
        return response.status(204).end()
    }
    
    await Apartment.findByIdAndRemove(request.params.id)
    response.status(204).end()
})