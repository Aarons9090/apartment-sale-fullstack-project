import { useState } from "react"

const ApartmentForm = ({ addApartment }) => {
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [price, setPrice] = useState("")
    const [area, setArea] = useState("")
    const [description, setDescription] = useState("")
    const [seller, setSeller] = useState("")
    const [apartmentType, setApartmentType] = useState("")

    return (
        <div>
            <form onSubmit={addApartment}>
                <div>
                    address: <input onChange={({ target }) => { setAddress(target.value) }} value={address} />
                </div>
                <div>
                    city: <input onChange={({ target }) => { setCity(target.value) }} value={city} />
                </div>
                <div>
                    price: <input onChange={({ target }) => { setPrice(target.value) }} value={price} />
                </div>
                <div>
                    area: <input onChange={({ target }) => { setArea(target.value) }} value={area} />
                </div>
                <div>
                    description: <input onChange={({ target }) => { setDescription(target.value) }} value={description} />
                </div>
                <div>
                    seller: <input onChange={({ target }) => { setSeller(target.value) }} value={seller} />
                </div>
                <div>
                    Apartment type: <input onChange={({ target }) => { setApartmentType(target.value) }} value={apartmentType} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default ApartmentForm