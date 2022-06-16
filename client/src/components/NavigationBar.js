import { Link } from "react-router-dom"

const NavigationBar = () => {
    return (
        <div className="nav-bar">
            
            <div className="links">
                <Link to="/">Home</Link>|<Link to="/search">Apartments</Link>|
                <Link to="/">Sell apartment</Link>
            </div>
        </div>
    )
}

export default NavigationBar