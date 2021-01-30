import React from "react";
import "./components.css";
import { ReactComponent as CorgiLogo } from "../Assets/corgi_logo.svg";
import { ReactComponent as Team } from "../Assets/castle_butte.svg";

export default function HomeScreen() {
  return (
    <div className="screen">
      <div className="titleBox">
        <CorgiLogo />
        <h1 className="bigText">Coronation</h1>
      </div>
      {/* <div className="startBox"> */}
      <a className="startButton" href="/hostjoin">
        Start
      </a>
      {/* </div> */}
      <div className="teamBox">
        <Team />
      </div>
    </div>
  );
}
