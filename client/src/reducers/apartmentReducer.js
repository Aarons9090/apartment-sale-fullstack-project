import { createSlice } from "@reduxjs/toolkit"
import apartmentService from "../services/apartments"

const initialState = []

const apartmentSlice = createSlice({
    name: "apartments",
    initialState,
    reducers: {
        appendApartment (state, action) {
            state.push(action.payload)
        },
        setApartments(state, action){
            return action.payload
        }
    }
})

export const {appendApartment, setApartments} = apartmentSlice.reducer

export const initializeApartments = () => {
    return async dispatch => {
        const apartments = await apartmentService.getAll()
        dispatch(setApartments(apartments))
    }
}

export const addApartment = apartmentObj => {
    return async dispatch => {
        try {
            const newApartment = await apartmentService.create(apartmentObj)
            dispatch(appendApartment(newApartment))
        } catch (e){
            console.log(e)
        } 
    }
}