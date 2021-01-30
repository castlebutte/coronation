import { Board } from "./board";
export interface Game {
  started: boolean;
  whiteTurn: boolean;
  board?: Board;
}

export interface Move {
  oldPos: [number, number];
  newPos: [number, number];
}
