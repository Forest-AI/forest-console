import React from "react";
import "./Listitem.css";

/** 
Its a simple List item that is used as alert in 
Alertbar component
**/

function ListItem(props) {
  return (
    <div className="ListItem-container">
      <div className="items-row1">
        <h1>{props.location}</h1>
        <h1>{props.activity}</h1>
        <h1>{props.time}</h1>
      </div>
    </div>
  );
}

export default ListItem;
