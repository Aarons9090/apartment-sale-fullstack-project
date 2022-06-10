import ApartmentCard from "./ApartmentCard"
import "../styles/ApartmentGrid.css"
import { useSelector } from "react-redux"

const ApartmentGrid = () => {
    const apartments = useSelector(state => state.apartments)
    return (
        <div className="search-results">
            <div className="grid">
                {apartments.map(apartment => <ApartmentCard key={apartment.id} apartment={apartment} />)}
            </div>
        </div>
    )
}

export default ApartmentGrid