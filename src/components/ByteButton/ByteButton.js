import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const ByteButton = (props) => {
  return (
    <Link to={props.to} className="byte-button" onClick={() => props.onClick()}>
      {props.label}
    </Link>
  );
};

export default ByteButton;
