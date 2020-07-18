import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

import consoleLogo from "../img/console-logo.svg";
import homeLogo from "../img/home.svg";
import dataLogo from "../img/data.svg";
import gpsLogo from "../img/gps.svg";
import alertLogo from "../img/alert.svg";
import settingLogo from "../img/setting.svg";
import userPic from "../img/userpic.png";

/**
 * Sidebar that provides options to navigate to different pages
 **/

function Sidebar() {
  return (
    <div className="sidebar-container">
      <img id="forest-logo" src={consoleLogo} alt="Forest-Logo" />

      <div className="sidebar-option-container">
        {/* Todo: Add Link tag to all images */}
        <Link className="sidebar-logos" to="">
          <img src={homeLogo} alt="" />
        </Link>
        <Link className="sidebar-logos" to="">
          <img src={dataLogo} alt="" />
        </Link>
        <Link className="sidebar-logos" to="">
          <img src={gpsLogo} alt="" />
        </Link>
        <Link className="sidebar-logos" to="">
          <img src={alertLogo} alt="" />
        </Link>
        <Link className="sidebar-logos" to="/settings">
          <img src={settingLogo} alt="" />
        </Link>
      </div>

      {/* <img src={userPic} alt="User" /> */}
    </div>
  );
}

export default Sidebar;
