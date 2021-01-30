import React from "react";
import "./components.css";

import { ReactComponent as Host } from "../Assets/host_button.svg";
import { ReactComponent as Join } from "../Assets/join_button.svg";

export default function HostJoinScreen() {
  return (
    <div className="hostJoinScreen">
      <h1 className="mediumText">Host Game</h1>
      <a className="buttonBox" href="/waiting">
        <Host />
      </a>
      <h1 className="mediumText">Join Game</h1>
      <a className="buttonBox" href="/waiting">
        <Join />
      </a>
    </div>
  );
}
