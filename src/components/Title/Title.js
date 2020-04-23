import React from "react";
import "./title.css";

const Title = (props) => {
  let { title, subtitle } = props;
  return (
    <div className="page-title">
      <div className="page-title-container">
        <h2 className="goblin-text page-title">{title ? title : "Title"}</h2>
      </div>
      <div className="page-subtitle-container">
        <h3 style={{ margin: "10px 5px" }}>
          {subtitle ? subtitle : "Subtitle"}
        </h3>
      </div>
    </div>
  );
};

export default Title;
