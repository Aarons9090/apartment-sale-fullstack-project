import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { initializeApartments } from "./reducers/apartmentReducer"
import { Routes, Route } from "react-router-dom"
import SearchPage from "./components/pages/searchPage/SearchPage"
import HomePage from "./components/pages/homePage/HomePage"
import { initializeApartmentValues } from "./reducers/apartmentValuesReducer"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApartments())
        dispatch(initializeApartmentValues())
    }, [dispatch])
    
    return (
        
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/search/:id" element={<div>apartment page</div>} />
        </Routes>
    )
}

export default App
