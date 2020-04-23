import React from "react";
import "./button.css";

const ByteButton = (props) => {
  return (
    <button className="byte-button" onClick={() => props.onClick()}>
      {props.label}
    </button>
  );
};

export default ByteButton;
