import React from "react";
import "./Login.css";
import ForestLoginLogo from "../img/forest-footer-logo.svg";

const Login = () => {
  return (
    <div className="main-conatiner">
      <div className="form-conatiner">
        <img src={ForestLoginLogo} alt="logo"></img>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button className="login-button">LOG IN</button>
        <div className="other-links">
          <a href="test.com">Forgot Password</a>
          <a href="test.com">Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
