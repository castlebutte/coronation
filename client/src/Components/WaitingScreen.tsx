import React, { useEffect } from "react";
import socket from "../socket";
import "./components.css";
import { ReactComponent as Start } from "../Assets/start_button.svg";
import { useHistory } from "react-router-dom";
import { Location } from "history";
import { Game, Lobby } from "../../../types";

export default function HomeScreen({
  location,
}: {
  location: Location<Lobby>;
}) {
  useEffect(() => {
    socket.on("start", (game: Game) => {
      history.push({ pathname: "/game", state: game });
    });
    return () => {
      socket.off("start");
    };
  }, []);
  const history = useHistory();
  const lobby = location.state;
  function startGame() {
    socket.emit("start", (game: Game) => {
      history.push({ pathname: "/game", state: game });
    });
  }
  function placeVanguard() {
    socket.emit("start", ({ game }: { game: Game }) => {
      history.push({ pathname: "/game", state: game });
    });
  }
  return (
    <div className="screen">
      <h1 style={{ color: "#F4B670" }} className="mediumText">
        Game Code: {lobby.code}
      </h1>
      <div className="playerBox">
        <h1 className="smallText">Host: Corgi White</h1>
        <h1 style={{ color: "#F4B670" }} className="smallText">
          Joined: Corgi Beige
        </h1>
      </div>
      <h1 className="smallText">Board Size: {lobby.size}</h1>
      <div className="buttonBox" onClick={startGame}>
        <Start />
      </div>
    </div>
  );
}
