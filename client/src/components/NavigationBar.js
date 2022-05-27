import "../styles/NavigationBar.css"
import SortBar from "./SortBar"

const NavigationBar = ({ apartments }) => {
    return (
        <div className="top">
            <div className="bar">
                Nav bar
            </div>
            <div className="filter-group">
                <div className="search-bar">
                </div>
                <SortBar apartments={apartments} />
            </div>

        </div>

    )
}

export default NavigationBar