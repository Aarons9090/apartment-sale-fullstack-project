import { useEffect } from "react"
import NavigationBar from "./components/NavigationBar"
import ApartmentGrid from "./components/ApartmentGrid"
import { useDispatch } from "react-redux"
import { initializeApartments } from "./reducers/apartmentReducer"
import { Routes, Route } from "react-router-dom"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApartments())
        //dispatch(initializeFilter())
    }, [dispatch])

    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<ApartmentGrid />} />
                <Route path="/search" element={<ApartmentGrid />} />
            </Routes>
        </div>
    )
}

export default App
