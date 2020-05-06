import React from "react";
import { connect } from "react-redux";
import MapRegion from "./MapRegion";
import regions from "../../data/regions";
import "./map.css";

const WorldMap = ({ loggedIn }) => {
  return loggedIn ? (
    <div className="map-container">
      {regions.map((r, n) => (
        <MapRegion
          key={n}
          name={r.name}
          description={r.description}
          src={r.src}
          cuisine={r.cuisine}
        />
      ))}
    </div>
  ) : (
    <p style={{ textAlign: "center" }}>
      You need to be logged in to use this page!
    </p>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps)(WorldMap);
