import React from "react";
import "./Home.css";
import Sidebar from "../Components/Sidebar";
import Map from "../Components/Map";
import Alertbar from "../Components/Alertbar";

function Home() {
  return (
    <div className="Home">
      <Sidebar />
      <Map />
      <Alertbar />
    </div>
  );
}
export default Home;
