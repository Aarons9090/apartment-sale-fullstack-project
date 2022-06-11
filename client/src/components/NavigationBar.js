import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Stack } from "@mui/material"
import {
    setPriceFilter,
    setSizeFilter,
    setTypeFilter,
    setRoomsFilter,
    setCityFilter,
} from "../reducers/searchFilterReducer"
import "../styles/NavigationBar.css"
import apartmentService from "../services/apartments"
import Dropdown from "./Dropdown"
import SortBar from "./SortBar"
import RangeSlider from "./RangeSlider"
import { useNavigate } from "react-router-dom"

const NavigationBar = () => {
    const [cities, setCities] = useState([])
    const apartments = useSelector(state => state.apartments)
    const [maxSize, setMaxSize] = useState("")
    const [minSize, setMinSize] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [rooms, setRooms] = useState([])
    const [types, setTypes] = useState([])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const { size, rooms, types, price, cities } =
                await apartmentService.getSearchData()

            setCities(cities)
            setMaxSize(size.max)
            setMinSize(size.min)
            setRooms(rooms)
            setTypes(types)
            setMaxPrice(price.max)
            setMinPrice(price.min)
        }
        fetchData()
    }, [])

    const searchFilter = useSelector(state => state.searchFilter)

    const filters = useSelector(state => state.searchFilter)

    const handleSearch = event => {
        event.preventDefault()
        console.log(filters, searchFilter)
        const url = `/search?
        ${filters.type ? `type=${filters.type}&` : ""}
        ${filters.city ? `city=${filters.city.replace(/\s/g, "-")}&` : ""}
        ${filters.rooms ? `rooms=${filters.rooms}&` : ""}
        ${
            filters.size
                ? `minSize=${filters.size.min}&maxSize=${filters.size.max}&`
                : ""
        }
        ${
            filters.price
                ? `minPrice=${filters.price.min}&maxPrice=${filters.price.max}&`
                : ""
        }
        `
        const strippedUrl = url.replace(/\s/g, "")
        console.log(strippedUrl)
        navigate(strippedUrl)
    }

    return minPrice ? (
        <div className="top">
            <div className="top-bar"></div>
            <div className="filler-bar"></div>
            <div className="filter-group">
                <div className="search-bar">
                    <Stack direction="row" spacing={2}>
                        <Dropdown
                            content={cities}
                            title="City"
                            setFilter={value => {
                                dispatch(setCityFilter(value))
                            }}
                        />
                        <Dropdown
                            content={types}
                            title="Type"
                            setFilter={value => {
                                dispatch(setTypeFilter(value))
                            }}
                        />
                        <Dropdown
                            content={rooms}
                            title="Rooms"
                            setFilter={value => {
                                dispatch(setRoomsFilter(value))
                            }}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <RangeSlider
                            title={"price"}
                            min={minPrice}
                            max={maxPrice}
                            roundBy={1000}
                            setFilter={value => {
                                dispatch(setPriceFilter(value))
                            }}
                        />
                        <RangeSlider
                            title={"size"}
                            min={minSize}
                            max={maxSize}
                            roundBy={1}
                            setFilter={value => {
                                dispatch(setSizeFilter(value))
                            }}
                        />
                        <button onClick={handleSearch}>Seach</button>
                    </Stack>
                </div>
                <SortBar apartments={apartments} />
            </div>
        </div>
    ) : null
}

export default NavigationBar
