import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

const Carousel = () => {
    const apartments = useSelector(state => state.apartments)
    const [currentApartment, setCurrent] = useState(null)
    const [dots, setDots] = useState([])
    const timerRef = useRef(null)
    const CAROUSEL_MAX_IMAGES = 5
    const navigate = useNavigate()
    let index = 0

    useEffect(() => {
        if (apartments.length !== 0) {
            timeout()
            setCurrent(apartments[0])
            let dots_list = []
            for (let i = 0; i < CAROUSEL_MAX_IMAGES; i++) {
                dots_list.push(<span key={i} className="dot" id={i}></span>)
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

    const timeout = () => {
        timerRef.current = setTimeout(() => {
            if (apartments.length !== 0) {
                // when leaving page, carousel doesnt render
                const carousel = document.getElementById("images")
                if (carousel) {
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

                    if (index === CAROUSEL_MAX_IMAGES - 1) {
                        index = 0
                    } else {
                        index++
                    }
                }
            }
            timeout()
        }, 3000)
    }

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
        </div>
    )
}

export default Carousel
