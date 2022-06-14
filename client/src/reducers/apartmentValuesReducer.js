import { createSlice } from "@reduxjs/toolkit"
import apartmentService from "../services/apartments"

const initialState = []

const apartmentValuesSlice = createSlice({
    name: "apartmentValues",
    initialState,
    reducers: {
        setFilter(state, action) {
            return action.payload
        }
       
    },
})

export const { setFilter } = apartmentValuesSlice.actions

export const initializeApartmentValues = () => {
    return async dispatch => {
        const filters = await apartmentService.getSearchData()
        dispatch(setFilter(filters))
    }
}

export default apartmentValuesSlice.reducer
