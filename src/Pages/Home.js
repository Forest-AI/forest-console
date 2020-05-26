import React from "react";
import "./Home.css";
import Sidebar from "../Components/Sidebar";
import Map from "../Components/Map";

function Home() {
  return (
    <div className="Home">
      <Sidebar />
      <Map />
    </div>
  );
}

export default Home;
