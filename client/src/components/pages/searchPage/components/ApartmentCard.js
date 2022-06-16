import { Link } from "react-router-dom"
import "../../../../styles/ApartmentCard.css"

const ApartmentCard = ({ apartment }) => {

    return (
        <Link to={`${apartment.id}`} style={{textDecoration: "none"}}>
            <div className="card">
                <div className="image-container">
                    <img src={apartment.image} alt="house" />
                </div>
                <div className="info-box">
                    <span className="address">
                        {apartment.address}, {apartment.city}
                    </span>
                    <span className="price">{`${apartment.price}€`}</span>
                    <div className="right-info-group">
                        <p>
                            {apartment.area} m{<sup>2</sup>}
                        </p>
                        <p>{apartment.apartmentType}</p>
                        <p>{apartment.oneLiner}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ApartmentCard
