import React from "react";
import MapRegion from "./MapRegion";
import regions from "../../data/regions";
import "./map.css";

const WorldMap = (props) => {
  return (
    <div className="map-container">
      {regions.map((r, n) => {
        return (
          <MapRegion
            key={n}
            name={r.name}
            description={r.description}
            src={r.src}
          />
        );
      })}
    </div>
  );
};

export default WorldMap;
