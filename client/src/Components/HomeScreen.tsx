import React from "react";
import "./components.css";
import { ReactComponent as CorgiLogo } from "../Assets/corgi_logo.svg";
import { ReactComponent as Team } from "../Assets/castle_butte.svg";
import { ReactComponent as Start } from "../Assets/start_button.svg";

export default function HomeScreen() {
  return (
    <div className="screen">
      <div className="titleBox">
        <CorgiLogo />
        <h1 className="bigText">Coronation</h1>
      </div>
      <a className="startBox" href="/hostjoin">
        <Start />
      </a>
      <div className="teamBox">
        <Team />
      </div>
    </div>
  );
}
