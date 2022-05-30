import "../styles/SortDropdown.css"
import { useState } from "react"

const Dropdown = ({ content }) => {
    const [selected, setSelected] = useState("");
    const [expanded, setExpanded] = useState(false);

    const expand = () => setExpanded(true)
    const close = () => setExpanded(false)

    const contentStyle = { display: expanded ? "block" : "none" }

    const select = (event) => {
        const value = event.target.textContent
        console.log(value)
        close()
        setSelected(value)
    }

    const onBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            close()
        }
    }
    

    return (
        <div className="dropdown" tabIndex={0} onBlur={onBlur}>
            <button className="dropdown-button" onClick={expand}>{selected ? selected : "Sort"}</button>
            
                <div style={contentStyle} className="dropdown-content">
                    {content.map(obj => (
                        <div key={obj} className="dropdown-element" onClick={select}>{obj}</div>
                        ))
                    }
                </div>
            
            


        </div >
    )
}


export default Dropdown