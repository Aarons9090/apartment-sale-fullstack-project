import "../../../../styles/BigCard.css"

const BigCard = ({text, image}) => {
    return (
        <div className="big-card">
            <div className="big-card-image-container">
                { <img src={image} alt="" /> }
            </div>
            
            <span>{text}</span>
        </div>
    )
}

export default BigCard