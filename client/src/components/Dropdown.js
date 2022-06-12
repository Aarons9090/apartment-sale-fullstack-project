import "../styles/SortDropdown.css"
import { useState } from "react"

const Dropdown = ({ content, title, setFilter }) => {
    const [selected, setSelected] = useState("")
    const [expanded, setExpanded] = useState(false)

    const close = () => setExpanded(false)

    const contentStyle = { display: expanded ? "block" : "none" }
    const arrowNotSelected = { transform: "rotate(135deg)" }
    const arrowSelected = { transform: "rotate(-45deg)", margin: "5px 5px" }

    const select = event => {
        const value = event.target.textContent
        console.log(value)
        close()
        setSelected(value)

        if (setFilter) {
            setFilter(value)
        }
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
                        key={obj}
                        className="dropdown-element"
                        onClick={select}
                    >
                        {obj}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown
