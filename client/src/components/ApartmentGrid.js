import ApartmentCard from "./ApartmentCard"
import "../ApartmentCard.css"

const ApartmentGrid = ({apartments}) => {
    return(
        <div className="grid">
            {apartments.map(apartment => <ApartmentCard key={apartment.id} apartment={apartment} />)}
        </div>
    )
}

export default ApartmentGrid