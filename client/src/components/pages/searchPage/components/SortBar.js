import "../../../../styles/NavigationBar.css"
import SortDropdown from "./Dropdown"
const SortBar = ({ length }) => {
    return (
        <div className="sort-bar">
            <span className="found">{`Found ${length} properties`}</span>
            <SortDropdown
                content={[
                    "Price increasing",
                    "Price decreasing",
                    "Newest",
                    "Oldest",
                ]}
                title="Sort"
            />
        </div>
    )
}

export default SortBar
