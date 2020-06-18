import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import ForestLoginLogo from "../img/forest-footer-logo.svg";
import { auth } from "../firebase";

const Login = () => {
  //states for email & password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // email & password event
  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  // history instance
  var history = useHistory();

  //Login function
  const onLogin = () => {
    //firebase login apis
    auth
      .signInWithEmailAndPassword(email, password)
      .then(function (result) {
        console.log("user signed in");
        console.log(result);
        history.push("/home");
      })
      .catch(function (error) {
        console.log("there was an error signing in...");
        console.log(error);
        window.alert("there was an error signing in...");
      });
  };

  return (
    <div className="main-conatiner">
      <div className="form-conatiner">
        <img src={ForestLoginLogo} alt="logo"></img>

        <input type="email" placeholder="Email" onChange={onEmailChange} />
        <input
          type="password"
          placeholder="Password"
          onChange={onPasswordChange}
        />

        <button className="login-button" onClick={onLogin}>
          LOG IN
        </button>

        <div className="other-links">
          <Link to="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
