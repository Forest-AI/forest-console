import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Signup.css";
import SignupPageImage from "../img/forest-team.svg";

const Signup = () => {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // event
  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  //error messages
  var [signupErrorMessage, setSignupErrorMessage] = useState("");

  var history = useHistory();

  const onSignUp = () => {
    // firebase authentication
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        history.push("/login");
        signupErrorMessage = setSignupErrorMessage("");
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log("error signing up !");
        signupErrorMessage = setSignupErrorMessage(
          "Error signing up, Try again!"
        );

        //Note: need to clear field when error in signup
      });

    //clear states on successful signup
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup-page">
      <img id="SignupPageImage" src={SignupPageImage} alt="" />
      <div className="right-elements">
        <h1 id="signup-header-1">Connect, Collect</h1>
        <h1 id="signup-header-2">Adapt</h1>
        <p>Create free account, stop climate change </p>
        <div className="signup-form">
          <h3>SignUp Now</h3>
          <input type="email" placeholder="Email" onChange={onEmailChange} />
          <input
            type="password"
            placeholder="Password"
            onChange={onPasswordChange}
          />
          {/* <input type="password" placeholder="Verify Password" /> */}
          <button type="submit" onClick={onSignUp}>
            SIGN UP
          </button>
          <h1 className="error-message">{signupErrorMessage}</h1>
          <Link to="/login">already have an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
