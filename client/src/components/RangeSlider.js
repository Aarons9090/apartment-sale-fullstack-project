import { Slider } from "@mui/material"
import { useState } from "react"
import "../styles/NavigationBar.css"
const valuetext = value => {
    return `${value}°C`
}

const RangeSlider = ({ title, max, min, roundBy, setFilter }) => {
    const roundedMin = Math.round(min / roundBy) * roundBy
    const roundedMax = Math.round(max / roundBy) * roundBy

    const minimumGap = roundedMax * 0.1

    const [value, setValue] = useState([roundedMin, roundedMax])

    const handleChange = (event, newValue) => {
        if(newValue[1] - newValue[0] > minimumGap){
            setValue(newValue)
            setFilter(newValue)
        } 
    }

    return (
        <div className="rangeslide-container">
            <p>{title}</p>
            <p>
                {value[0]} {value[1]}
            </p>
            <Slider
                min={roundedMin}
                max={roundedMax} // TODO: > 300 000e esim.
                disableSwap
                step={roundBy}
                valueLabelDisplay="auto"
                value={value}
                onChange={handleChange}
                getAriaValueText={valuetext}
            />
        </div>
    )
}

export default RangeSlider
