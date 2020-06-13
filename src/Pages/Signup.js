import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import SignupPageImage from "../img/forest-team.svg";

const Signup = () => {
  return (
    <div className="signup-page">
      <img id="SignupPageImage" src={SignupPageImage} alt="" />
      <div className="right-elements">
        <h1 className="header-1">Connect, Collect</h1>
        <h1 className="header-2">Adapt</h1>
        <p>Create free account, stop climate change </p>
        <div className="signup-form">
          <h3>SignUp Now</h3>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Verify Password" />
          <button>SIGN UP</button>
          <Link to="/login">already have an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
