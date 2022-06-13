import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Stack } from "@mui/material"
import {
    setPriceFilter,
    setSizeFilter,
    setTypeFilter,
    setRoomsFilter,
    setCityFilter,
} from "../../../../reducers/searchFilterReducer"
import "../../../../styles/NavigationBar.css"
import apartmentService from "../../../../services/apartments"
import FilterDropdown from "./FilterDropdown"
import RangeSlider from "./RangeSlider"
import { useNavigate } from "react-router-dom"

const NavigationBar = () => {
    const [cities, setCities] = useState([])
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

    const filters = useSelector(state => state.searchFilter)

    const handleSearch = event => {
        event.preventDefault()

        const params = new URLSearchParams()
        if (filters.type) params.append("type", filters.type)
        if (filters.city) params.append("city", filters.city)
        if (filters.rooms) params.append("rooms", filters.rooms)
        if (filters.size) {
            params.append("maxSize", filters.size.max)
            params.append("minSize", filters.size.min)
        }
        if (filters.price) {
            params.append("maxPrice", filters.price.max)
            params.append("minPrice", filters.price.min)
        }

        const url = `/search?${params.toString()}`
        console.log(url)
        navigate(url)
    }

    const wideButtonStyle = {
        width: "90%",
        maxWidth: "260px",
        minWidth: "200px",
    }
    const narrowButtonStyle = {
        width: "70%",
        maxWidth: "200px",
        minWidth: "150px",
    }

    return minPrice ? (
        <div className="top">
            <div className="nav-bar"></div>

            <div className="filter-group">
                <div className="filler-bar"></div>
                <div className="search-bar">
                    <span className="search-bar-title">
                        Search for listings
                    </span>
                    <div className="filter-dropdown-row">
                        <FilterDropdown
                            style={wideButtonStyle}
                            content={cities}
                            title="City"
                            setFilter={value => {
                                dispatch(setCityFilter(value))
                            }}
                        />

                        <FilterDropdown
                            style={wideButtonStyle}
                            content={types}
                            title="Type"
                            setFilter={value => {
                                dispatch(setTypeFilter(value))
                            }}
                        />

                        <FilterDropdown
                            style={narrowButtonStyle}
                            content={rooms}
                            title="Rooms"
                            setFilter={value => {
                                dispatch(setRoomsFilter(value))
                            }}
                        />
                    </div>

                    <div className="slider-row">
                        <RangeSlider
                            title={"price"}
                            min={minPrice}
                            max={maxPrice}
                            roundBy={1000}
                            symbol="€"
                            setFilter={value => {
                                dispatch(setPriceFilter(value))
                            }}
                        />
                        <RangeSlider
                            title={"size"}
                            min={minSize}
                            max={maxSize}
                            roundBy={1}
                            symbol={`m\xB2`}
                            setFilter={value => {
                                dispatch(setSizeFilter(value))
                            }}
                        />

                        <button className="search-submit-button" onClick={handleSearch}>Seach</button>
                    </div>
                </div>
            </div>
        </div>
    ) : null
}

export default NavigationBar
