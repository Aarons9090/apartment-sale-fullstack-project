import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const useUrl = () => {
    const [maxSize, setMaxSize] = useState("")
    const [minSize, setMinSize] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [minPrice, setMinPrice] = useState("")

    const filters = useSelector(state => state.searchFilter)
    const maxValues = useSelector(state => state.apartmentValues)
    console.log(filters)
    useEffect(() => {
        if (maxValues.length !== 0) {
            const { size, price } = maxValues

            setMaxSize(size.max)
            setMinSize(size.min)
            setMaxPrice(price.max)
            setMinPrice(price.min)
        }
    }, [maxValues])

    const params = new URLSearchParams()
    if (filters.type) params.append("type", filters.type)
    if (filters.city) params.append("city", filters.city)
    if (filters.rooms) params.append("rooms", filters.rooms)

    // no size or price param if value same as default

    if (filters.price) {
        if (
            filters.price.min &&
            filters.price.min !== Math.floor(minPrice / 1000) * 1000
        )
            params.append("minPrice", filters.price.min)
        if (
            filters.price.max &&
            filters.price.max !== Math.ceil(maxPrice / 1000) * 1000
        )
            params.append("maxPrice", filters.price.max)
    }

    if (filters.size) {
        if (filters.size.min && filters.size.min !== minSize) {
            params.append("minSize", filters.size.min)
        }
        if (filters.size.max && filters.size.max !== maxSize) {
            params.append("maxSize", filters.size.max)
        }
    }

    if(filters.sort) params.append("sort", filters.sort)

    const url = `/search?${params.toString()}`
    return url
}

export default useUrl
