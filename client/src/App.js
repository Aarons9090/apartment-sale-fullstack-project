import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { initializeApartments } from "./reducers/apartmentReducer"
import { Routes, Route } from "react-router-dom"
import SearchPage from "./components/pages/SearchPage"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApartments())
    }, [dispatch])

    return (
        <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/search" element={<SearchPage />} />
        </Routes>
    )
}

export default App
