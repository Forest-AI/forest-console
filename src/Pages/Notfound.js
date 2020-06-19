import React from "react";
import "./Notfound.css";
import image_404 from "../img/404.svg";

function Notfound() {
  return (
    <div className="Notfound">
      <img id="image_404" src={image_404} alt="image_404" />
      <h1 className="header-1">lost in the forest ?</h1>
      <h1 className="header-2">try going back</h1>
    </div>
  );
}

export default Notfound;
