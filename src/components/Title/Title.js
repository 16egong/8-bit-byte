import React from "react";
import "./title.css";

const Title = (props) => {
  return (
    <div className="page-title-container">
      <h2 className="page-title">{props.title}</h2>
    </div>
  );
};

export default Title;
