import React from "react";
import HomePage from "./components/pages/HomePage";
import LandingPage from "./components/pages/LandingPage";
import { Switch, Route } from "react-router-dom";
import "./styles/index.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={HomePage} />
    </Switch>
  );
}

export default App;
