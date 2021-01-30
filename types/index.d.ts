export interface Game {
  started: boolean;
  whiteTurn: boolean;
}

export interface Move {
  oldPos: [number, number];
  newPos: [number, number];
}
