import "../styles/NavigationBar.css"
import SortBar from "./SortBar"
import RangeSlider from "./RangeSlider"
import { Stack } from "@mui/material"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import apartmentService from "../services/apartments"
import Dropdown from "./Dropdown"

const NavigationBar = () => {
    const [cities, setCities] = useState([])
    const apartments = useSelector(state => state.apartments)
    const [maxSize, setMaxSize] = useState("")
    const [minSize, setMinSize] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [rooms, setRooms] = useState([])
    const [types, setTypes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const cities = await apartmentService.getAllCities()
            setCities(cities)

            const sizes = await apartmentService.getMinMaxSize()
            setMaxSize(sizes.maxSize)
            setMinSize(sizes.minSize)

            const rooms = await apartmentService.getRooms()
            setRooms(rooms)

            const types = await apartmentService.getTypes()
            setTypes(types)

            const prices = await apartmentService.getMinMaxPrice()
            setMaxPrice(prices.maxPrice)
            setMinPrice(prices.minPrice)
        }
        fetchData()
    }, [])

    const handleSearch = (event) => {
        event.preventDefault()
    }

    return (
        minPrice ? 
        <div className="top">
            <div className="top-bar"></div>
            <div className="filler-bar"></div>
            <div className="filter-group">
                <div className="search-bar">
                    
                    <Stack direction="row" spacing={2}>
                    <Dropdown content={cities} title="City" />
                    <Dropdown content={types} title="Type" />
                    <Dropdown content={rooms} title="Rooms" />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <RangeSlider
                            title={"price"}
                            min={minPrice}
                            max={maxPrice}
                            roundBy={1000}
                        />
                        <RangeSlider
                            title={"size"}
                            min={minSize}
                            max={maxSize}
                            roundBy={1}
                        />
                        <button onClick={handleSearch} >
                            Seach
                        </button>
                    </Stack>
                </div>
                <SortBar apartments={apartments} />
            </div>
        </div>
        : null
    )
}

export default NavigationBar
