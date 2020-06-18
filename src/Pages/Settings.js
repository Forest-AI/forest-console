import React from "react";
import "./Settings.css";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Settings = () => {
  //Sign Out function
  const history = useHistory();
  const Signout = () => {
    auth
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log("Signed Out");
        history.push("/");
      })
      .catch(function (error) {
        // An error happened.
        console.log("Error Signing Out");
        console.log(error);
      });
  };

  return (
    <div className="settings-page">
      <div className="element-container">
        <h1>Forest Console settings page</h1>
        <p>Press Log Out button below to log out of your account</p>
        <button onClick={Signout}>LOG OUT</button>
      </div>
    </div>
  );
};

export default Settings;
