import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./Map.css";
import firebase from "../firebase";

/**
 * Main Map instance of Console
 **/

function Map() {
  // Mapbox specific setup here
  const myWidth = window.innerWidth - 60;
  const mapType = "mapbox://styles/mapbox/outdoors-v9";

  const [viewport, setViewport] = useState({
    width: myWidth,
    height: window.innerHeight,
    latitude: 19.182755,
    longitude: 72.840157,
    zoom: 10,
  });

  const [markerList, setMarkerList] = useState();

  useEffect(() => {
    const markerRef = firebase.database().ref("Alert");
    markerRef.on("value", (snapshot) => {
      const markers = snapshot.val();
      const markerKey = snapshot.key;
      const markerList = [];
      for (let id in markers) {
        markerList.push(markers[id]);
      }
      setMarkerList(markerList);
    });
  }, []);

  return (
    <div className="map-container">
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
        mapStyle={mapType}
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {/* Alerts goes here*/}
        {markerList
          ? markerList.map((marker) => (
              <Marker
                latitude={marker.lat}
                longitude={marker.long}
                offsetLeft={-20}
                offsetTop={-10}
              >
                <span role="img" aria-label="">
                  🔴
                </span>
              </Marker>
            ))
          : ""}
      </ReactMapGL>
    </div>
  );
}

export default Map;
