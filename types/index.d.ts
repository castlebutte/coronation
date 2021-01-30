import { Board } from "./board";
export interface Lobby {
  started: boolean;
  whiteTurn: boolean; // is host white or black
}
export interface Game extends Lobby {
  board: Board;
  // white turn becomes whether it's white's turn or not
}

export interface Move {
  oldPos: [number, number];
  newPos: [number, number];
}
