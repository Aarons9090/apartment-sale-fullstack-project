import "../../../../styles/SortDropdown.css"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import useUrl from "../hooks/useUrl"
import { useNavigate } from "react-router-dom"

const Dropdown = ({ content, title, setFilter }) => {
    const [selected, setSelected] = useState("")
    const [expanded, setExpanded] = useState(false)

    const close = () => setExpanded(false)
    const dispatch = useDispatch()
    const getUrl = useUrl()
    const navigate = useNavigate()
    
    const url = getUrl
    const contentStyle = { display: expanded ? "block" : "none" }
    const arrowNotSelected = { transform: "rotate(135deg)" }
    const arrowSelected = { transform: "rotate(-45deg)", margin: "5px 5px" }
    

    useEffect(() => {
        navigate(url)
    }, [navigate, url])

    const select = event => {
        event.preventDefault()
        const value = event.target.textContent
        console.log(value)
        
        setSelected(value)
        dispatch(setFilter(value))
        const url = getUrl
        console.log(url)
        

        close()
    }

    const onBlur = event => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            close()
        }
    }

    return (
        <div className="dropdown" tabIndex={0} onBlur={onBlur}>
            <div
                className="dropdown-button"
                onClick={() => {
                    setExpanded(!expanded)
                }}
            >
                {selected ? selected : title}
                <div
                    style={expanded ? arrowSelected : arrowNotSelected}
                    className="arrow"
                ></div>
            </div>

            <div style={contentStyle} className="dropdown-content">
                {content.map(obj => (
                    <div
                        key={obj.key}
                        className="dropdown-element"
                        onClick={select}
                    >
                        {obj.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown
