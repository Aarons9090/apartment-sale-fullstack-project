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

const getAllCities = async () => {
    const res = await axios.get(`${URL}/cities`)
    return res.data
}

const remove = async id => {
    const res = await axios.delete(`${URL}/${id}`)
    return res.data
}

export default {
    create,
    getAll,
    remove,
    getAllCities
}