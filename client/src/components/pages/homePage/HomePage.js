import NavigationBar from "../../NavigationBar"
import "../../../styles/HomePage.css"
import { useNavigate } from "react-router-dom"
import pool_image from "../../../resources/pool.png"
import balls from "../../../resources/balls.svg"
import Carousel from "./components/Carousel"

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

                <img
                    src={pool_image}
                    className="pool-image-container"
                    alt="relaxed-pool-girl"
                />

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

            <div className="second-page-background">
                <Carousel />
                <div className="balls">
                    <img src={balls} alt="balls" />
                </div>
                <div className="side-slice">
                    <div className="side-slice-text">Browse hundreds of <span>new</span> listings</div>
                    <button
                        onClick={() => {
                            navigate("/search")
                        }}
                        className="primary-btn"
                    >
                        Browse
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
