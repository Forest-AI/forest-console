import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

{
  /*  Main entry point of the app used for routing between pages */
}

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
