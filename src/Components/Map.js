import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./Map.css";
import Chainsaw from "../img/chainsaw.png";

const Map = () => {
  const myWidth = window.innerWidth - 60;
  const mapType = "mapbox://styles/mapbox/outdoors-v11";
  const [viewport, setViewport] = useState({
    width: myWidth,
    height: window.innerHeight,
    latitude: 19.182755,
    longitude: 72.840157,
    zoom: 9,
  });

  return (
    <div className="map-container">
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
        mapStyle={mapType}
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Marker
          latitude={19.182755}
          longitude={72.840157}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <img src={Chainsaw} alt="marker" />
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
