import React, { useState, useEffect } from "react";
import "./Alertbar.css";
import ListItem from "./Listitem";
import firebase from "../firebase";
/**
 * It displays alerts fetched from reat-time
 * database uses Listietm component
 **/

const Alertbar = () => {
  const [alertList, setAlertList] = useState();

  useEffect(() => {
    const alertRef = firebase.database().ref("Alert");
    alertRef.on("value", (snapshot) => {
      const alerts = snapshot.val();
      const alertList = [];
      for (let id in alerts) {
        alertList.push(alerts[id]);
      }
      setAlertList(alertList);
    });
  }, []);

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
        {/* Alerts goes here*/}
        {alertList
          ? alertList.map((alert, index) => (
              <ListItem alert={alert} key={index} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Alertbar;
