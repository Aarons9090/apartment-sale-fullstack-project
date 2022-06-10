import "../styles/NavigationBar.css"
import SortBar from "./SortBar"
import RangeSlider from "./RangeSlider"
import { Stack } from "@mui/material"

const NavigationBar = ({ apartments }) => {
    return (
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
                            min={20}
                            max={230}
                            roundBy={1}
                        />
                    </Stack>
                </div>
                <SortBar apartments={apartments} />
            </div>
        </div>
    )
}

export default NavigationBar
