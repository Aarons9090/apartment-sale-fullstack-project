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

    useEffect(() => {
        const fetchData = async () => {
            const cities = await apartmentService.getAllCities()
            setCities(cities)

            const sizes = await apartmentService.getMinMaxSize()
            setMaxSize(sizes.maxSize)
            setMinSize(sizes.minSize)
        }
        fetchData()
    }, [])

    return (
        minSize ? 
        <div className="top">
            <div className="top-bar"></div>
            <div className="filler-bar"></div>
            <div className="filter-group">
                <div className="search-bar">
                    <Stack direction="row" spacing={2}>
                        <RangeSlider
                            title={"price"}
                            min={40200}
                            max={520000}
                            roundBy={1000}
                        />
                        <RangeSlider
                            title={"size"}
                            min={minSize}
                            max={maxSize}
                            roundBy={1}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                    <Dropdown content={cities} title="City" />
                    </Stack>
                </div>
                <SortBar apartments={apartments} />
            </div>
        </div>
        : null
    )
}

export default NavigationBar
