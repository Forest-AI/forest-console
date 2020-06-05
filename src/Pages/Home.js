import React from "react";
import "./Home.css";
import Sidebar from "../Components/Sidebar";
import Map from "../Components/Map";
import Statbar from "../Components/Statbar";

function Home() {
  return (
    <div className="Home">
      <Sidebar />
      <Map />
      <Statbar
        onlineNodeCount="10"
        offlineNodeCount="2"
        chainsawMarkerCount="3"
        wildfireMarkerCount="0"
        huntingMarkerCount="0"
      />
    </div>
  );
}
export default Home;
