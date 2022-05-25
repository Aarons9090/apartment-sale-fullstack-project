import "../ApartmentCard.css"
const ApartmentCard = ({apartment}) => {

    return (
        <div className="card">
            <div className="image-container">
                <img src="https://cdn.pixabay.com/photo/2016/01/15/19/55/house-1142297_960_720.jpg" alt="house" />
            </div>
            <div className="price-data">
                <p>{apartment.price}</p>
            </div>
            <div className="address">
                <p>{apartment.address}</p>
            </div>
            
        </div>
    )
}

export default ApartmentCard