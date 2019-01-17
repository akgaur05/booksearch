import React from "react";
import "./style.css";

function Buttons(props) {
    return(
        <div>
        <button type="submit" className="btn mr-2" onClick={props.function1}>{props.buttonName1}</button>
        <button type="submit" className="btn" onClick={props.function2}>{props.buttonName2}</button>
        </div>
    )
}

export default Buttons;