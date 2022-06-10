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

const getSearchData = async () => {
    const res = await axios.get(URL)
    const apartments = res.data

    const prices = apartments.map(apartment => apartment.price)

    const maxPrice = Math.max(...prices)
    const minPrice = Math.min(...prices)

    const rooms = apartments.map(apartment => apartment.rooms)

    const uniqueRooms = [...new Set(rooms)]
    const sortedRooms = uniqueRooms.sort((a, b) => b - a)

    const types = apartments.map(apartment => apartment.apartmentType)
    const uniqueTypes = [...new Set(types)]

    const sizes = apartments.map(apartment => apartment.area)
    const maxSize = Math.max(...sizes)
    const minSize = Math.min(...sizes)

    const cities = apartments.map(apartment => apartment.city)
    const uniqueCities = [...new Set(cities)]

    return {
        price: {min: minPrice, max: maxPrice},
        rooms: sortedRooms,
        types: uniqueTypes,
        size: {min: minSize, max: maxSize},
        cities: uniqueCities,
    }
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
    getSearchData,
}
