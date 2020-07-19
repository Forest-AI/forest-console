import React, { useState, useEffect } from "react";
import "./Alertbar.css";
import ListItem from "./Listitem";
import _ from "lodash";
import db from "../firebase";

/**
 * It displays alerts fetched from reat-time
 * database uses Listietm component
 **/

const Alertbar = () => {
  const [alert, setAlert] = useState([]);

  // this effect fetches alerts from firebase
  useEffect(() => {
    let alertsRef = db.collection("alerts");
    alertsRef.get().then((alerts) => {
      alerts.forEach((alert) => {
        let data = alert.data();
        let id = alert.id;

        // lets make payload with all above data and the id
        let payload = {
          id,
          ...data,
        };

        // saving the payload in the state alert
        setAlert((alert) => [...alert, payload]);
      });
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
        {/* use lodash map function to map value from fake api
         which is nothing but an object and maps to props of component
         Listitem*/}
        {_.map(alert, (alert, idx) => {
          return (
            <ListItem
              key={idx}
              id={alert.id}
              location={alert.location}
              activity={alert.activity}
              time={alert.time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Alertbar;
