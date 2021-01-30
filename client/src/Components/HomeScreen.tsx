import React from "react";
import "./components.css";
import { ReactComponent as CorgiLogo } from "../Assets/corgi_logo.svg";
import { ReactComponent as StartButton } from "../Assets/start_button.svg";

export default function HomeScreen() {
  return (
    <div className="screen">
      <div className="corgiBox">
        <CorgiLogo />
        <h1 className="bigText">Coronation</h1>
      </div>
      <div className="startBox">
        <StartButton />
      </div>
    </div>
  );
}
