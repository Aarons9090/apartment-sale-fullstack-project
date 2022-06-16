import ApartmentCard from "./ApartmentCard"
import "../../../../styles/ApartmentGrid.css"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import SortBar from "./SortBar"
import { sortingMethods } from "../../../../helpers/constants"
import useUrl from "../hooks/useUrl"

const ApartmentGrid = () => {
    const allApartments = useSelector(state => state.apartments)
    const [filteredApartments, setFilteredApartment] = useState([])
    const [sortedApartments, setSortedApartments] = useState([])
    const [params, setParams] = useState(null)
    const [url] = useUrl()

    const useQuery = () => {
        const { search } = useLocation()
        return useMemo(() => new URLSearchParams(search), [search])
    }
    const query = useQuery()

    // convert query to JSON of params
    useEffect(() => {
        let paramsMap = {}
        for (const p of query) {
            paramsMap[p[0]] = p[1]
        }

        setParams(paramsMap)
    }, [url, query])

    useEffect(() => {
        const { type, city, rooms, maxPrice, minPrice, maxSize, minSize } =
            params || {}

        const filtered = allApartments
            .filter(a => (type ? a.apartmentType === type : a))
            .filter(a => (city ? a.city === city : a))
            .filter(a => (maxPrice ? a.price <= Number(maxPrice) : a))
            .filter(a => (minPrice ? a.price >= Number(minPrice) : a))
            .filter(a => (rooms ? a.rooms === Number(rooms) : a))
            .filter(a => (maxSize ? a.area <= Number(maxSize) : a))
            .filter(a => (minSize ? a.area >= Number(minSize) : a))

        setFilteredApartment(filtered)
    }, [allApartments, params])

    useEffect(() => {
        if (params && params.sort) {
            console.log("sorting")
            switch (params.sort) {
                case sortingMethods.PRICE_INCREASING.title:
                    setSortedApartments(
                        filteredApartments.sort((a, b) => a.price - b.price)
                    )
                    break
                case sortingMethods.PRICE_DECREASING.title:
                    setSortedApartments(
                        filteredApartments.sort((a, b) => b.price - a.price)
                    )
                    break
                case sortingMethods.DATE_ADDED_NEWEST.title:
                    setSortedApartments(
                        filteredApartments.sort(
                            (a, b) => {
                                const a_date = new Date(b.addTime)
                                const b_date = new Date(a.addTime)
                                return a_date - b_date
                            }
                        )
                    )
                    break
                case sortingMethods.DATE_ADDED_OLDEST.title:
                    setSortedApartments(
                        filteredApartments.sort(
                            (a, b) => {
                                const a_date = new Date(b.addTime)
                                const b_date = new Date(a.addTime)
                                return b_date - a_date
                            }
                        )
                    )
                    break
                default:
                    setSortedApartments(filteredApartments)
            }
        } else {
            setSortedApartments(filteredApartments)
        }
    }, [filteredApartments, params])

    return allApartments ? (
        <div className="search-results">
            <SortBar length={filteredApartments.length} />
            <div className="grid">
                {filteredApartments.length !== 0 ? (
                    sortedApartments.map(apartment => (
                        <ApartmentCard
                            key={apartment.id}
                            apartment={apartment}
                        />
                    ))
                ) : (
                    <p>no apartments</p>
                )}
            </div>
        </div>
    ) : null
}

export default ApartmentGrid
