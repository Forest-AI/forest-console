import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./Map.css";

const Map = () => {
  const myWidth = window.innerWidth - 50;
  const mapType = "mapbox://styles/mapbox/outdoors-v9";
  const [viewport, setViewport] = useState({
    width: myWidth,
    height: window.innerHeight,
    latitude: 19.182755,
    longitude: 72.840157,
    zoom: 10,
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
          latitude={19.2283}
          longitude={72.9139}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <span role="img"> 🌲</span>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
