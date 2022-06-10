import { configureStore } from "@reduxjs/toolkit"
import apartmentReducer from "./reducers/apartmentReducer"
import searchFilterReducer from "./reducers/searchFilterReducer"

export const store = configureStore({
    reducer:{
        apartments: apartmentReducer,
        searchFilter: searchFilterReducer
    }
})