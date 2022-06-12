import ApartmentCard from "./ApartmentCard"
import "../styles/ApartmentGrid.css"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useMemo } from "react"
import SortBar from "./SortBar"
const ApartmentGrid = () => {
    const apartments = useSelector(state => state.apartments)

    const useQuery = () => {
        const { search } = useLocation()
        return useMemo(() => new URLSearchParams(search), [search])
    }

    const query = useQuery()

    // convert query to JSON of params
    let params = {}
    for(const p of query) {
        params[p[0]] = p[1]
    }
    
    const {type, city, rooms, maxPrice, minPrice, maxSize, minSize} = params

    const getFilteredApartments = () => {

        return apartments
            .filter(a => (type ? a.apartmentType === type : a))
            .filter(a => (city ? a.city === city : a))
            .filter(a => (maxPrice ? a.price <= Number(maxPrice) : a))
            .filter(a => (minPrice ? a.price >= Number(minPrice) : a))
            .filter(a => (rooms ? a.rooms === rooms : a))
            .filter(a => (maxSize ? a.area <= Number(maxSize) : a))
            .filter(a => (minSize ? a.area >= Number(minSize) : a))
    }

    return apartments ? (
        <div className="search-results">
            <SortBar length={getFilteredApartments().length} />
            <div className="grid">
                {getFilteredApartments()
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
