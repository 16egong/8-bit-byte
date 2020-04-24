import React from "react";
import "./dietButton.css";


function DietButton(props) {
    return (
        <div className="diet-button">
            <div className="circle">
                <img className="icon" src={props.img} alt="props.text" />
            </div>
            <div className="text-area">
                {props.text}
            </div>

        </div>
    )

}
export default DietButton;