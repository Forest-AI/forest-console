import React from "react";
import "./Listitem.css";

/** 
Its a simple List item that is used as alert in 
Alertbar component
**/

function ListItem({ alert }) {
  console.log(alert);

  return (
    <div className="ListItem-container">
      <div className="items-row1">
        <h1>{alert.location}</h1>
        <h1>{alert.activity}</h1>
        <h1>{alert.time}</h1>
      </div>
    </div>
  );
}

export default ListItem;
