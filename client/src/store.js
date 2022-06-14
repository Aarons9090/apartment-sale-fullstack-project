import { configureStore } from "@reduxjs/toolkit"
import apartmentReducer from "./reducers/apartmentReducer"
import searchFilterReducer from "./reducers/searchFilterReducer"
import apartmentValuesReducer from "./reducers/apartmentValuesReducer"

export const store = configureStore({
    reducer:{
        apartments: apartmentReducer,
        searchFilter: searchFilterReducer,
        apartmentValues: apartmentValuesReducer
    }
})