import { useState } from "react"
import "./tooltip.css"


export const Tooltip = () => {
    //state to set position
    const [position, setPosition] = useState("");
    //state to set visibility of tooltip
    const [displayTip, setDisplayTip] = useState(false)
    //function to handle hoverOver
    const hoverIn = (e) => {
        console.log(e.target.value)
        setPosition(e.target.value)
        setDisplayTip(true);
    }
    //function to handle hoverOut
    const hoverOut = () => {
        setDisplayTip(false);
    }
  return (
    <div className="tooltip">
        <div className="tooltip-btn">
            <button onMouseOver={hoverIn} onMouseOut={hoverOut} value="top" className="btn">Top</button>
            <button onMouseOver={hoverIn} onMouseOut={hoverOut} value="bottom" className="btn">Bottom</button>
            <button onMouseOver={hoverIn} onMouseOut={hoverOut} value="left" className="btn">Left</button>
            <button onMouseOver={hoverIn} onMouseOut={hoverOut} value="right" className="btn">Right</button>
            <div className={position} style={{display:displayTip? 'block':'none'}}>I am {position} tooltip</div>
        </div>
        <div>Please Hover on button</div>
    </div>
  )
}
