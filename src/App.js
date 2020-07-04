import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { auth } from "./firebase";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Settings from "./Pages/Settings";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import Notfound from "./Pages/Notfound";

/*  Main entry point of the app used for routing between pages */

function App() {
  const [user, setUser] = useState(false);

  auth.onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      setUser(user);
    } else {
      // No user is signed in.
      console.log("no user signed in");
    }
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login"></Redirect>
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute exact path="/settings" component={Settings} />
          <Route path="*" component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
