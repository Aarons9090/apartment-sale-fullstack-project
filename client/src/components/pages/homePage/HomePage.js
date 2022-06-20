import NavigationBar from "../../NavigationBar"
import "../../../styles/HomePage.css"
import { useNavigate } from "react-router-dom"
const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div className="home-page-content">
            <NavigationBar />
            <div className="background-container">
                <div className="text-box">
                    <div className="main-text">FIND YOU FOREVER HOME</div>
                    <span>AND START A NEW CHAPTER</span>
                </div>
                <div className="button-row">
                    <button
                        onClick={() => {
                            navigate("/search")
                        }}
                        className="primary-btn"
                    >
                        Find my new home
                    </button>
                    <span className="middle-text">or</span>
                    <button className="secondary-btn">Sell my apartment</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
