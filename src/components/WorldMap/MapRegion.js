import React from "react";
import "./map.css";

const MapRegion = (props) => {
  let { name, description, src } = props;
  return (
    <div className="map-region-container">
      <div className="map-region-inner-container">
        <img
          className="region-image"
          src={require(`../../assets/map/${src}`)}
          alt="outline of region"
        />
      </div>
      <div className="map-region-info">
        <h5 className="goblin-text">{name}</h5>
        <div>
          {description.map((line, n) => {
            return (
              <p
                key={n}
                style={{ margin: 5, fontSize: "0.7rem", fontFamily: "Arial" }}
              >
                > {line}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MapRegion;
