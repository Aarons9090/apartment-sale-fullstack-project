import "../styles/NavigationBar.css"
import SortDropdown from "./SortDropdown"
const SortBar = ({ apartments }) => {
    return (
        <div className="sort-bar">
            <span className="found">{`Found ${apartments.length} properties`}</span>
            <SortDropdown />
        </div>
    )
}

export default SortBar