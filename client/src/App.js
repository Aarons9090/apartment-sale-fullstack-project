import { useEffect } from "react"
import NavigationBar from "./components/NavigationBar"
import { useDispatch } from "react-redux"
import { initializeApartments } from "./reducers/apartmentReducer"
import { Routes, Route, useNavigate } from "react-router-dom"
import SearchPage from "./components/pages/SearchPage"

function App() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        dispatch(initializeApartments())
        //dispatch(initializeFilter())
    }, [dispatch])

    return (
        
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        
    )
}

export default App
