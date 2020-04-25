import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const ByteButton = (props) => {
  let { backgroundColor, textColor } = props;
  return (
    <Link
      to={props.to}
      className="byte-button"
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={() => props.onClick()}
    >
      {props.label}
    </Link>
  );
};

export default ByteButton;
