import { Link } from "react-router-dom"
import logo from "../resources/logo.png"
import "../styles/NavigationBar.css"
import { useState } from "react"

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false)
    const close = () => setExpanded(false)

    const sidebarStyle = { transform: expanded ? "translateX(0)" : "translateX(100%)"}
    const buttonStyle =  { opacity: expanded ? "0" : "100%"}
    const onBlur = event => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            close()
        }
    }

    return (
        <div className="nav-bar">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="links">
                <Link to="/">Home</Link>|<Link to="/search">Apartments</Link>|
                <Link to="/">Sell apartment</Link>
            </div>
            <div className="popup-menu" tabIndex={0} onBlur={onBlur}>
                
                <div className="sidebar" style={sidebarStyle}>
                    <div className="sidebar-links">
                    <Link to="/">Home</Link>
                    <Link to="/search">Apartments</Link>
                    <Link to="/">Sell apartment</Link>
                    </div>
                    
                </div>
                <button
                style={buttonStyle}
                    onClick={() => {
                        setExpanded(!expanded)
                    }}
                >
                    ≡
                </button>
            </div>
        </div>
    )
}

export default NavigationBar
