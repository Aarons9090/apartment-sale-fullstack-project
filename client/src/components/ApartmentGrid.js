import ApartmentCard from "./ApartmentCard"
import "../styles/ApartmentGrid.css"

const ApartmentGrid = ({ apartments }) => {
    return (
        <div className="search-results">
            <div className="grid">
                {apartments.map(apartment => <ApartmentCard key={apartment.id} apartment={apartment} />)}
            </div>
        </div>
    )
}

export default ApartmentGrid