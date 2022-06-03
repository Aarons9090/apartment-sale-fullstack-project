import {Slider} from "@mui/material"
import { useState } from "react"
function valuetext(value) {
    return `${value}°C`;
  }
const RangeSlider = ({title, max, min}) => {
    const roundedMin = Math.round(min/1000)*1000
    const roundedMax = Math.round(max/1000)*1000

    const [value, setValue] = useState([roundedMin, roundedMax])

    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
    return(
        <div>
            <h2>{title}</h2>
            <Slider
            min={roundedMin}
            max={roundedMax} // TODO: > 300 000e esim.
            step={1000}
            valueLabelDisplay="auto"
            value={value}
            onChange={handleChange}
            getAriaValueText={valuetext}/>
        </div>
    )
}

export default RangeSlider