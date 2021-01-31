import React, { useEffect, useState } from "react";
import socket from "../socket";
import "./components.css";
import { ReactComponent as Start } from "../Assets/start_button.svg";
import { useHistory } from "react-router-dom";
import { Location } from "history";
import { BoardSize, Game, Lobby } from "../../../types";
import { ReactComponent as Eight } from "../Assets/8x8.svg";
import { ReactComponent as Ten } from "../Assets/10x10.svg";
import { ReactComponent as Twelve } from "../Assets/12x12.svg";
import { ReactComponent as Fourteen } from "../Assets/14x14.svg";
import { ReactComponent as Sixteen } from "../Assets/16x16.svg";

function inc(size: BoardSize): BoardSize {
  return (size === 16 ? 8 : size + 2) as BoardSize;
}
function dec(size: BoardSize): BoardSize {
  return (size === 8 ? 16 : size - 2) as BoardSize;
}
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

  const [size, setSize] = useState(lobby.size);
  useEffect(() => {
    socket.emit("setting", { size }, ({ ok }: { ok: boolean }) => {});
  }, [size]);
  const boardSizes = [
    <div className="buttonBox">
      <Eight />
    </div>,
    <div className="buttonBox">
      <Ten />
    </div>,
    <div className="buttonBox">
      <Twelve />
    </div>,
    <div className="buttonBox">
      <Fourteen />
    </div>,
    <div className="buttonBox">
      <Sixteen />
    </div>,
  ];

  return (
    <div className="screen">
      <h1 style={{ color: "#F4B670" }} className="mediumText">
        Game Code: {lobby.code}
      </h1>
      <div className="playerBox">
        <h1 className="smallText">Host: White</h1>
        <h1 className="smallText">Joined: Black</h1>
      </div>
      <h1 className="smallText">Board Size: {size}</h1>

      <div onClick={() => setSize(inc(size))}>
        <Start />
      </div>
      <div onClick={() => setSize(dec(size))}>
        <Start />
      </div>

      <div className="buttonBox" onClick={startGame}>
        <Start />
      </div>
    </div>
  );
}
