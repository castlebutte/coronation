import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import HomeScreen from "./Components/HomeScreen";
import HostJoinScreen from "./Components/HostJoinScreen"
import WaitingScreen from "./Components/WaitingScreen"
import GameScreen from "./Components/GameScreen"



export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/hostjoin" component={HostJoinScreen} />
          <Route exact path="/waiting" component={WaitingScreen} />
          <Route exact path="/game" component={GameScreen} />
        </BrowserRouter>
      </header>
    </div>
  );
}
