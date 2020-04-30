import React from "react";
import "./dietButton.css";

function DietButton(props) {
  let { type, active } = props;
  return (
    <div className="diet-button" onClick={() => props.onClick()}>
      <div className={"diet-circle" + (active ? " diet-active" : "")}>
        {console.log(props.src)}
        <img
          className="diet-icon"
          src={require(`../../assets/images/${props.src}`)}
          alt={`icon representing dietary preference for ${type}`}
        />
      </div>
      <div className={"diet-text-area" + (active ? " diet-active" : "")}>
        {type
          .split(" ")
          .map((type) => type.charAt(0).toUpperCase() + type.slice(1))}
      </div>
    </div>
  );
}

export default DietButton;
