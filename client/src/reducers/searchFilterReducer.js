import { createSlice } from "@reduxjs/toolkit"

const initialState = null

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

            return {...state, prices: {min, max}}
        }
    }
})

export const {setFilter, setPriceFilter} = searchFilterSlice.actions

export default searchFilterSlice.reducer