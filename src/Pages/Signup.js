import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const onSignUp = () => {
    console.log("sign up");
    console.log(email, password);

    // firebase authentication
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        console.log("error signing up !");
        window.alert("error signing up !");

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
        <h1 className="header-1">Connect, Collect</h1>
        <h1 className="header-2">Adapt</h1>
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
          <button onClick={onSignUp}>SIGN UP</button>
          <Link to="/login">already have an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
