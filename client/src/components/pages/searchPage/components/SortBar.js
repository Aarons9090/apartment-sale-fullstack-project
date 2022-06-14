import { setSortFilter } from "../../../../reducers/searchFilterReducer"
import "../../../../styles/NavigationBar.css"
import SortDropdown from "./Dropdown"
import { sortingMethods } from "../../../../helpers/constants"

const SortBar = ({ length }) => {
    const titles = Object.entries(sortingMethods).map(([k, v]) => v)

    return (
        <div className="sort-bar">
            <span className="found">{`Found ${length} properties`}</span>
            <SortDropdown
                content={titles}
                title="Sort"
                setFilter={value => (setSortFilter(value))}
            />
        </div>
    )
}

export default SortBar
