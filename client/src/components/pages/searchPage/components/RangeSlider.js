import { Slider } from "@mui/material"
import { useState } from "react"
import "../../../../styles/RangeSlider.css"



const RangeSlider = ({ title, max, min, roundBy, setFilter, symbol }) => {
    const roundedMin = Math.floor(min / roundBy) * roundBy
    const roundedMax = Math.ceil(max / roundBy) * roundBy

    const minimumGap = roundedMax * 0.1

    const [value, setValue] = useState([roundedMin, roundedMax])

    const handleChange = (event, newValue) => {
        if(newValue[1] - newValue[0] > minimumGap){
            setValue(newValue)
            setFilter(newValue)
        } 
    }

    const valuetext = value => {
        return `${value}${symbol}`
    }

    const style = {
        "& .MuiSlider-thumb":{
            backgroundColor: "white",
            border: "2px solid var(--wp-preset--color--secondary-gray)"
        },
        "& .MuiSlider-thumb:hover": {
            width: "30px",
            height: "30px"
        },
        "& .MuiSlider-rail": {
            backgroundColor: "var(--wp-preset--color--secondary-gray)",
            opacity: "1"
        },
        "& .MuiSlider-track": {
            backgroundColor: "var(--wp-preset--color--highlight-orange)",
            border: "2px solid var(--wp-preset--color--highlight-orange)"
        },
        "& .MuiSlider-valueLabel": {
            color: "var(--wp-preset--color--secondary-gray)",
            backgroundColor: "transparent",

        }
        
    }

    return (
        <div className="rangeslider">
            <p>{title}</p>
            <Slider
                sx={style}
                
                min={roundedMin}
                max={roundedMax}
                disableSwap
                step={roundBy}
                valueLabelDisplay="on"
                value={value}
                onChange={handleChange}
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
            />
        </div>
    )
}

export default RangeSlider
