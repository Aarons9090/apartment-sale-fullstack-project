import "../styles/ApartmentCard.css"
const ApartmentCard = ({ apartment }) => {
    let price;
    switch (apartment.price.length) {
        case 5: price = `${apartment.price.substring(0, 2)} ${apartment.price.substring(2)}€`; break
        case 6: price = `${apartment.price.substring(0, 3)} ${apartment.price.substring(3)}€`; break
        case 7: price = `${apartment.price.substring(0, 1)} ${apartment.price.substring(1, 4)} ${apartment.price.substring(4)}€`; break
        default: price = apartment.price
    }

    return (
        <div className="card-area">
            <div className="card">
                <div className="image-container">
                    <img src={apartment.image} alt="house" />
                </div>
                <div className="info-box">
                    <span className="address">{apartment.address} {apartment.city}</span>
                    <span className="price">{price}</span>
                    <span className="area">{apartment.area} m{<sup>2</sup>}</span>
                </div>
            </div>
        </div>

    )
}

export default ApartmentCard