import React, { useState } from 'react';
import "./dietButton.css";



function DietButton(props) {
    const [isActive, setIsActive] = useState(false);
        if (isActive) {
            console.log(`ACTIVE1: ${isActive}`)
            return (
                <div className="diet-button" onClick={() => setIsActive(!isActive)}>
                    <div className="circle active">
                        <img className="icon" src={props.img} alt="props.text" />
                    </div>
                    <div className="text-area active">
                        {props.text}
                    </div>

                </div>);
        } else {
            console.log(`ACTIVE2: ${isActive}`)
            return (
                <div className="diet-button" onClick={() => setIsActive(!isActive)}>
                    <div className="circle">
                        <img className="icon" src={props.img} alt="props.text" />
                    </div>
                    <div className="text-area">
                        {props.text}
                    </div>
                </div>
            );
            
        }
}

function saveDiet () {
    console.log('CLICKED')
    var circle = document.getElementsByClassName("circle")
    var text_area = document.getElementsByClassName("text-area")
    circle.style.backgroundColor = "#ff5c00"
    text_area.style.backgroundColor = "#ff5c00"
} 


export default DietButton;