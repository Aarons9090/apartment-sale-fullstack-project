import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Carousel = () => {
    const [uniqueImages, setUniqueImages] = useState([])
    const apartments = useSelector(state => state.apartments)

    let index = 0

    useEffect(() => {
        if (apartments) {
            const images = apartments.map(apartment => apartment.image)
            const uniques = [...new Set(images)]
            console.log(uniques)
            setUniqueImages(uniques)
        }
    }, [apartments])

    useEffect(() => {
        timeout()
    }, [uniqueImages])

    const timeout = () => {
        setTimeout(() => {
            if (uniqueImages.length !== 0) {
                const carousel = document.getElementById("images")
                console.log(index)

                carousel.style.transform = `translateX(${index * -500}px)`

                if (index === uniqueImages.length - 1) {
                    index = 0
                } else {
                    index++
                }
            }

            timeout()
        }, 2000)
    }

    return (
        <div className="carousel-container">
            <div className="image-container" id="images">
                {uniqueImages.map(img => (
                    <img key={img} src={img} alt="" />
                ))}
            </div>
            <span>Muuramentie 21 | 145m2 | 270 000€</span>
        </div>
    )
}

export default Carousel
