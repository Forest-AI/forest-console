import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

/*  Main entry point of the app used for routing between pages */

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    </div>
  );
}

export default App;
