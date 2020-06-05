import React from "react";
import "./Statbar.css";

function Statbar(props) {
  return (
    <div className="statbar-container">
      <ul className="statbar">
        <li className="statbar-element">
          <h1 id="online" className="activity-count">
            {props.onlineNodeCount}
          </h1>
          <h1 className="activity-name">Online</h1>
        </li>
        <li className="statbar-element">
          <h1 id="offline" className="activity-count">
            {props.offlineNodeCount}
          </h1>
          <h1 className="activity-name">Offline</h1>
        </li>
        <li className="statbar-element">
          <h1 id="chainsaw" className="activity-count">
            {props.chainsawMarkerCount}
          </h1>
          <h1 className="activity-name">Chainsaw</h1>
        </li>
        <li className="statbar-element">
          <h1 id="wildfire" className="activity-count">
            {props.wildfireMarkerCount}
          </h1>
          <h1 className="activity-name">Wildfire</h1>
        </li>
        <li className="statbar-element">
          <h1 id="hunting" className="activity-count">
            {props.huntingMarkerCount}
          </h1>
          <h1 className="activity-name">Hunting</h1>
        </li>
      </ul>
    </div>
  );
}

export default Statbar;
