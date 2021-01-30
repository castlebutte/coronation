import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import HomeScreen from "./components/HomeScreen";
import HostJoinScreen from "./components/HostJoinScreen";
import WaitingScreen from "./components/WaitingScreen";
import GameScreen from "./components/GameScreen";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/hostjoin" component={HostJoinScreen} />
        <Route exact path="/waiting" component={WaitingScreen} />
        <Route exact path="/game" component={GameScreen} />
      </BrowserRouter>
    </>
  );
}
