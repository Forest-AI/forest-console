import React, { useState } from "react";
import "./Settings.css";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Settings = () => {
  //Sign Out function

  // history instance
  const history = useHistory();

  //signout error message
  var [signoutErrorMessage, setSignoutErrorMessage] = useState("");

  // performs signout using firebase apis
  const Signout = () => {
    auth
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log("Signed Out");
        history.push("/");
        signoutErrorMessage = setSignoutErrorMessage("");
      })
      .catch(function (error) {
        // An error happened.
        signoutErrorMessage = setSignoutErrorMessage(
          "Error signing out, Try again!"
        );
        console.log("Error Signing Out");
        console.log(error);
      });
  };

  return (
    <div className="settings-page">
      <div className="element-container">
        <h1>Forest Console settings page</h1>
        <p>Press Log Out button below to log out of your account</p>
        <button type="submit" onClick={Signout}>
          LOG OUT
        </button>
      </div>
    </div>
  );
};

export default Settings;
