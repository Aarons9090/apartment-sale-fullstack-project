import "../styles/NavigationBar.css"
import SortDropdown from "./Dropdown"
const SortBar = ({ apartments }) => {
    return (
        <div className="sort-bar">
            <span className="found">{`Found ${apartments.length} properties`}</span>
            <SortDropdown content={
               [ "Price increasing",
                "Price decreasing",
                "Newest",
                "Oldest"]

}/>
        </div>
    )
}

export default SortBar