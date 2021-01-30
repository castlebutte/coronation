import React from "react";
import "./components.css";
import { ReactComponent as Start } from "../Assets/start_button.svg";
import { Location } from "history";
import { Lobby } from "../../../types";

export default function HomeScreen({
  location,
}: {
  location: Location<Lobby>;
}) {
  const lobby = location.state;
  return (
    <div className="screen">
      <h1 className="mediumText">Game Code: {lobby.code}</h1>
      <div className="playerBox">
        <h1 className="smallText">Host: Corgi White</h1>
        <h1 className="smallText">Joined: Corgi Beige</h1>
      </div>
      <h1 className="mediumText">Board Size: {lobby.size}</h1>
      <a href="/game">
        <Start />
      </a>
    </div>
  );
}
