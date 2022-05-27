import "../styles/NavigationBar.css"

const SortBar = ({ apartments }) => {
    return (
        <div className="filter-bar">
            <span className="found">{`Found ${apartments.length} properties`}</span>
        </div>
    )
}

export default SortBar