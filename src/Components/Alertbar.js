import React from "react";
import "./Alertbar.css";
import ListItem from "./Listitem";

/**
 * It displays alerts fetched from reat-time
 * database uses Listietm component
 **/

const Alertbar = () => {
  return (
    <div className="Alertbar-container">
      <div className="stat-section">
        <input type="search" placeholder="Search" />
        <div className="stat-row1">
          <h1 id="online-count">2361</h1>
          <h1 id="online-label">Online</h1>
        </div>

        <div className="stat-row2">
          <div className="stat-row2-element">
            <h1 id="chainsaw-count">10</h1>
            <h1 id="chainsaw-label">Chainsaw</h1>
          </div>

          <div className="stat-row2-element">
            <h1 id="wildfire-count">0</h1>
            <h1 id="wildfire-label">Wildfire</h1>
          </div>

          <div className="stat-row2-element">
            <h1 id="poaching-count">5</h1>
            <h1 id="poaching-label">Poaching</h1>
          </div>

          <div className="stat-row2-element">
            <h1 id="offline-count">2</h1>
            <h1 id="offline-label">Offline</h1>
          </div>
        </div>
      </div>

      <div className="scrollable-section">
        <ListItem location="Garden" activity="Chainsaw" time="Now" />
        <ListItem location="Gateway" activity="Chainsaw" time="01:23:45" />
        <ListItem location="Mid Area" activity="Poaching" time="11:23:45" />
        <ListItem location="Main Door" activity="Wildfire" time="01:23:45" />
        <ListItem location="Backyard" activity="Chainsaw" time="11:23:45" />
        <ListItem location="Main Door" activity="Wildfire" time="01:23:45" />
        <ListItem location="Garden" activity="Chainsaw" time="11:23:45" />
        <ListItem location="Main Door" activity="Wildfire" time="01:23:45" />
        <ListItem location="Backyard" activity="Chainsaw" time="11:23:45" />
        <ListItem location="Main Door" activity="Wildfire" time="01:23:45" />
      </div>
    </div>
  );
};

export default Alertbar;
