import { Link } from "react-router-dom"
import logo from "../resources/logo.svg"
import "../styles/NavigationBar.css"

const NavigationBar = () => {
    return (
        <div className="nav-bar">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="links">
                <Link to="/">Home</Link>|<Link to="/search">Apartments</Link>|
                <Link to="/">Sell apartment</Link>
            </div>
        </div>
    )
}

export default NavigationBar
