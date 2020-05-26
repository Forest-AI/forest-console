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
        <img id="option-logo" src={homeLogo} alt="Home" />
        <img id="option-logo" src={dataLogo} alt="Data" />
        <img id="option-logo" src={gpsLogo} alt="GPS" />
        <img id="option-logo" src={alertLogo} alt="Alert" />
        <img id="option-logo" src={settingLogo} alt="setting" />
      </div>

      <div className="user-account">
        <img src={userPic} alt="User" />
        <h1>Vikas</h1>
      </div>
    </div>
  );
}

export default Sidebar;
