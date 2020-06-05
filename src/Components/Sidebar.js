import React from "react";
import "./Sidebar.css";

import consoleLogo from "../img/console-logo.svg";
import homeLogo from "../img/home.svg";
import dataLogo from "../img/data.svg";
import gpsLogo from "../img/gps.svg";
import alertLogo from "../img/alert.svg";
import settingLogo from "../img/setting.svg";
import userPic from "../img/userpic.png";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <img id="forest-logo" src={consoleLogo} alt="Forest Logo" />

      <div className="sidebar-option-container">
        <img className="option-icon" src={homeLogo} alt="Home" />
        <img className="option-icon" src={dataLogo} alt="Data" />
        <img className="option-icon" src={gpsLogo} alt="GPS" />
        <img className="option-icon" src={alertLogo} alt="Alert" />
        <img className="option-icon" src={settingLogo} alt="setting" />
      </div>

      <img src={userPic} alt="User" />
    </div>
  );
}

export default Sidebar;
