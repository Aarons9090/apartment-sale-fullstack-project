import NavigationBar from "../../NavigationBar"
import "../../../styles/HomePage.css"
import { useNavigate } from "react-router-dom"
import pool_image from "../../../resources/pool.png"
import balls from "../../../resources/balls.svg"
import town from "../../../resources/town.svg"
import cabin from "../../../resources/cabin.svg"
import city from "../../../resources/city.svg"
import Carousel from "./components/Carousel"
import BigCard from "./components/BigCard"
import SmallCard from "./components/SmallCard"
import {LocalParking, DeviceThermostat, Elevator, LocationCity, Forest, BeachAccess} from "@mui/icons-material";

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
            <div className="middle-page">
                <h2>What suits you the best?</h2>
                <div className="big-card-row">
                    <BigCard
                        text="Quiet place on the hills to enjoy sunrises and nature"
                        image={cabin}
                    />
                    <BigCard
                        text="A resting place in the middle 
                            of your favorite activities"
                        image={city}
                    />
                    <BigCard text="A fresh start in a new city" image={town} />
                </div>
                <h2 style={{textAlign: "right"}}>Pick what's most important to you</h2>
                <div className="small-card-row-container">
                    <SmallCard icon={LocalParking} text="Parking" />
                    <SmallCard icon={DeviceThermostat} text="Sauna" />
                    <SmallCard icon={Elevator} text="Elevator" />
                    <SmallCard icon={Forest} text="Nature" />
                    <SmallCard icon={LocationCity} text="City centre" />
                    <SmallCard icon={BeachAccess} text="Beach" />
                </div>
            </div>
            <div className="second-page-background">
                <Carousel />
                <div className="balls">
                    <img src={balls} alt="balls" />
                </div>
                <div className="side-slice">
                    <div className="side-slice-text">
                        Browse hundreds of <span>new</span> listings
                    </div>
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
