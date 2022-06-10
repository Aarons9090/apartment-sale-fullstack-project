import { createSlice } from "@reduxjs/toolkit"
import apartmentService from "../services/apartments"

const initialState = []

const searchFilterSlice = createSlice({
    name: "searchFilter",
    initialState,
    reducers: {
        setFilter(state, action) {
            return action.payload
        },
        setPriceFilter(state, action) {
            const min = action.payload[0]
            const max = action.payload[1]
            return { ...state, price: { min, max } }
        },
        setSizeFilter(state, action) {
            const min = action.payload[0]
            const max = action.payload[1]
            return { ...state, size: { min, max } }
        },
        setTypeFilter(state, action) {
            return {...state, type: action.payload}
        },
        setRoomsFilter(state, action) {
            return {...state, rooms: action.payload}
        },
        setCityFilter(state, action) {
            return {...state, city: action.payload}
        }
    },
})

export const { setFilter, setPriceFilter, setSizeFilter, setTypeFilter, setRoomsFilter, setCityFilter } = searchFilterSlice.actions

export const initializeFilter = () => {
    return async dispatch => {
        const {size, price} = await apartmentService.getSearchData()
        const filterData = {
            size,
            price
        }
        console.log(filterData)
        dispatch(setFilter(filterData))
    }
}

export default searchFilterSlice.reducer
