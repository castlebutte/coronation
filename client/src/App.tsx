import React from "react";
import { BrowserRounter, Route } from "react-router-dom";
import "./App.css";

import {
  HomeScreen,
  HostJoinScreen,
  WaitingScreen,
  GameScreen,
} from "./Components";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRounter>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/hostjoin" component={HostJoinScreen} />
          <Route exact path="/waiting" component={WaitingScreen} />
          <Route exact path="/game" component={GameScreen} />
        </BrowserRounter>
      </header>
    </div>
  );
}
