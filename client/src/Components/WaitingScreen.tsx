import React from "react";
import "./components.css";
import { ReactComponent as Start } from "../Assets/start_button.svg";

export default function HomeScreen() {
  return (
    <div className="screen">
      <h1 className="mediumText">Game Code: 42069</h1>
      <div className="playerBox">
        <h1 className="smallText">Host: Corgi White</h1>
        <h1 className="smallText">Joined: Corgi Beige</h1>
      </div>
      <h1 className="mediumText">Board Size:</h1>
      <a href="/game">
        <Start />
      </a>
    </div>
  );
}
