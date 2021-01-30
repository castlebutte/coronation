import React from "react";
import "./components.css";
import BoardDisp from "./BoardDisp";
import { Location } from "history";
import { Game } from "../../../types";

export default function HomeScreen({ state }: Location<Game>) {
  const game = state;
  return (
    <div className="screen">
      <div className="boardBox">
        <BoardDisp board={game.board} />
      </div>
    </div>
  );
}
 