import React, { useState } from 'react';
import "./dietButton.css";



function DietButton(props) {
    const [isActive, setIsActive] = useState(false);
        if (isActive) {
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


export default DietButton;