import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import "../../../../styles/Carousel.css"
import arrow from "../../../../resources/carousel_arrow.svg"
const Carousel = () => {
    const apartments = useSelector(state => state.apartments)
    const [currentApartment, setCurrent] = useState(null)
    const [index, setIndex] = useState(0)
    const [dots, setDots] = useState([])
    const timerRef = useRef(null)
    const CAROUSEL_MAX_IMAGES = 5
    const navigate = useNavigate()

    useEffect(() => {
        if (apartments.length !== 0) {
            clearTimeout(timerRef.current)
            setCurrent(apartments[0])
            let dots_list = []
            for (let i = 0; i < CAROUSEL_MAX_IMAGES; i++) {
                if (i === 0) {
                    dots_list.push(
                        <span
                            key={i}
                            style={{ backgroundColor: "white" }}
                            className="dot"
                            id={i}
                        ></span>
                    )
                } else {
                    dots_list.push(<span key={i} className="dot" id={i}></span>)
                }
            }
            setDots(dots_list)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apartments])

    useEffect(() => {
        return () => {
            // clear timeout on page leave
            clearTimeout(timerRef.current)
        }
    }, [])

    const changeApartment = () => {
        // when leaving page, carousel doesnt render
        const carousel = document.getElementById("images")
        if (carousel) {
            console.log("change to", index)
            carousel.style.transform = `translateX(${index * -100}%)`
            setCurrent(apartments[index])

            // change indicator color
            const dotList = document.getElementsByClassName("dot")
            Array.prototype.forEach.call(dotList, dot => {
                if (Number(dot.id) !== index) {
                    dot.style["backgroundColor"] = "dimgray"
                } else {
                    dot.style["backgroundColor"] = "white"
                }
            })
            if (index >= CAROUSEL_MAX_IMAGES - 1) {
                console.log("zero")
                setIndex(0)
            } else {
                console.log("increment")
                setIndex(index + 1)
            }
        }
    }

    timerRef.current = setTimeout(
        () => {
            clearTimeout(timerRef.current)
            changeApartment()
        },

        2000
    )

    return (
        <div className="carousel-container">
            <div
                onClick={() => {
                    navigate(`/search/${currentApartment.id}`)
                }}
                className="image-container"
                id="images"
            >
                {apartments.slice(0, CAROUSEL_MAX_IMAGES).map(a => (
                    <img key={a.id} src={a.image} alt="" />
                ))}
            </div>

            <div className="carousel-indicators">{dots}</div>
            <span className="info-line">
                {currentApartment
                    ? `${currentApartment.city} | ${currentApartment.address} | ${currentApartment.price}€`
                    : null}
            </span>
            <div
                onClick={() => {
                    clearTimeout(timerRef)
                    changeApartment()
                }}
                className="right-arrow"
            >
                <img src={arrow} alt="right arrow" />
            </div>
            <div
                onClick={() => {
                    clearTimeout(timerRef)
                    setIndex(0)
                    changeApartment()
                }}
                className="left-arrow"
            >
                <img src={arrow} alt="left-arrow" />
            </div>
        </div>
    )
}

export default Carousel
