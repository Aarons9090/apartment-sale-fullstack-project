import "../styles/SortDropdown.css"

const SortDropdown = () => {
    return (
        <div className="sort-menu">
            <select>
                <option value="price-increasing">Price increasing</option>
                <option value="price-decreasing">Price decreasing</option>
                <option value="date-newest">Newest</option>
                <option value="date-olders">Oldest</option>
            </select>
        </div>
    )
}

export default SortDropdown