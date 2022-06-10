import axios from "axios"
const URL = "/api/apartments"

const create = async newApartment => {
    const res = await axios.post(URL, newApartment)
    return res.data
}

const getAll = async () => {
    const res = await axios.get(URL)
    return res.data
}

const getMinMaxPrice = async () => {
    const res = await axios.get(URL)
    const apartments = res.data
    const prices = apartments.map(apartment => apartment.price)
    const maxPrice = Math.max(...prices)
    const minPrice = Math.min(...prices)

    return {minPrice, maxPrice}
}

const getRooms = async () => {
    const res = await axios.get(URL)
    const rooms = res.data.map(apartment => apartment.rooms)
    const uniqueRooms = [...new Set(rooms)]
    const sortedRooms = uniqueRooms.sort((a, b) => b - a)
    return sortedRooms
}

const getTypes = async () => {
    const res = await axios.get(URL)
    const types = res.data.map(apartment => apartment.apartmentType)
    const uniqueTypes = [...new Set(types)]
    return uniqueTypes
}

const getMinMaxSize = async () => {
    const res = await axios.get(URL)
    const apartments = res.data
    const sizes = apartments.map(apartment => apartment.area)
    const maxSize = Math.max(...sizes)
    const minSize = Math.min(...sizes)

    return {minSize, maxSize}
}

const getAllCities = async () => {
    const res = await axios.get(`${URL}/cities`)
    return res.data
}

const remove = async id => {
    const res = await axios.delete(`${URL}/${id}`)
    return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    create,
    getAll,
    remove,
    getAllCities,
    getMinMaxSize,
    getMinMaxPrice,
    getRooms,
    getTypes
}