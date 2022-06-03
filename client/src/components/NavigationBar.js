import "../styles/NavigationBar.css"
import SortBar from "./SortBar"
import RangeSlider from "./RangeSlider"

const NavigationBar = ({ apartments }) => {
    return (
        <div className="top">
            <div className="top-bar"></div>
            <div className="filler-bar"></div>
            <div className="filter-group">
                <div className="search-bar">
                <RangeSlider title={"price"} min={40200} max={520000}/>
                </div>
                <SortBar apartments={apartments} />
            </div>

        </div>

    )
}

export default NavigationBar