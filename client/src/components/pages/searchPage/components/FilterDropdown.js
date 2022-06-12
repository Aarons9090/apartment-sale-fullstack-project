import "../../../../styles/FilterDropdown.css"
import { useState } from "react"

const FilterDropdown = ({ content, title, setFilter, style }) => {
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
        <div
            className="filter-dropdown"
            style={style}
            tabIndex={0}
            onBlur={onBlur}
        >
            {title}
            <div
                className="filter-dropdown-button"
                onClick={() => {
                    setExpanded(!expanded)
                }}
            >
                
                <div
                    style={expanded ? arrowSelected : arrowNotSelected}
                    className="arrow"
                ></div>
            </div>

            <div style={contentStyle} className="filter-dropdown-content">
                {content.map(obj => (
                    <div
                        key={obj}
                        className="filter-dropdown-element"
                        onClick={select}
                    >
                        {obj}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterDropdown
