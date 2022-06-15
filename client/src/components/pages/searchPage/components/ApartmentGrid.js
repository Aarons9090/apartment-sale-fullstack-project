import ApartmentCard from "./ApartmentCard"
import "../../../../styles/ApartmentGrid.css"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useMemo } from "react"
import SortBar from "./SortBar"
import { sortingMethods } from "../../../../helpers/constants"

const ApartmentGrid = () => {
    const apartments = useSelector(state => state.apartments)

    const useQuery = () => {
        const { search } = useLocation()
        return useMemo(() => new URLSearchParams(search), [search])
    }
    const query = useQuery()

    // convert query to JSON of params
    let params = {}
    for (const p of query) {
        params[p[0]] = p[1]
    }

    const { type, city, rooms, maxPrice, minPrice, maxSize, minSize, sort } =
        params

    const getFilteredApartments = () => {
        const filteredApartments = apartments
            .filter(a => (type ? a.apartmentType === type : a))
            .filter(a => (city ? a.city === city : a))
            .filter(a => (maxPrice ? a.price <= Number(maxPrice) : a))
            .filter(a => (minPrice ? a.price >= Number(minPrice) : a))
            .filter(a => (rooms ? a.rooms === Number(rooms) : a))
            .filter(a => (maxSize ? a.area <= Number(maxSize) : a))
            .filter(a => (minSize ? a.area >= Number(minSize) : a))


        return filteredApartments
    }

    const getSearchedApartments = () => {
        const filtered = getFilteredApartments()

        switch(sort) {
            case sortingMethods.PRICE_INCREASING.title:
                return filtered.sort((a, b) => a.price - b.price)
            case sortingMethods.PRICE_DECREASING.title:
                return filtered.sort((a,b) => b.price - a.price)
            default: return filtered
        }
    }



    return apartments ? (
        <div className="search-results">
            <SortBar length={getFilteredApartments().length} />
            <div className="grid">
                {getSearchedApartments()
                    .slice()
                    .map(apartment => (
                        <ApartmentCard
                            key={apartment.id}
                            apartment={apartment}
                        />
                    ))}
            </div>
        </div>
    ) : null
}

export default ApartmentGrid
