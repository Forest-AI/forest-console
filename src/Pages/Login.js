import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import ForestLoginLogo from "../img/forest-footer-logo.svg";
import { auth } from "../firebase";

const Login = () => {
  //states for email & password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //error messages
  var [LoginErrorMessage, setLoginErrorMessage] = useState("");

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
        console.log(result);
        console.log("user signed in");
        history.push("/home");
        LoginErrorMessage = setLoginErrorMessage("");
      })
      .catch(function (error) {
        console.log("there was an error signing in...");
        console.log(error);
        LoginErrorMessage = setLoginErrorMessage(
          "Error logging in, Try again !"
        );
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

        <button type="submit" className="login-button" onClick={onLogin}>
          LOG IN
        </button>

        <h1 className="error-message">{LoginErrorMessage}</h1>

        <div className="other-links">
          <Link to="/signup">Create Account</Link>
          <Link to="/">Forget Password</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
