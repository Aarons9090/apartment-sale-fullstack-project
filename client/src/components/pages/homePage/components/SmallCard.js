
import "../../../../styles/SmallCard.css"
const SmallCard = ({icon, text}) => {
    const Icon = icon
    return (
        <div className="small-card-container">
            <Icon className="icon"/>
            <span>{text}</span>
            <p>10 Apartments</p>
        </div>
    )
}

export default SmallCard