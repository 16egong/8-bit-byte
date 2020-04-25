import React from "react";
import { Link } from "react-router-dom";
import "./link.css";

const ByteButton = (props) => {
  let { backgroundColor, textColor, to } = props;
  return (
    <Link
      to={to}
      className="byte-button"
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={() => {
        if (props.onClick !== undefined) props.onClick();
      }}
    >
      {props.label}
    </Link>
  );
};

export default ByteButton;
