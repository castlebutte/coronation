export type MoveArr = [row: number, col: number][];
export abstract class Piece {
  position: [number, number];
  side: boolean;
  constructor(row: number, col: number, side: boolean);
  move(row: number, col: number): void;
  abstract checkMoves(board: Board): MoveArr;
}
export class Rook extends Piece {
  constructor(row: number, col: number, side: boolean);
  checkMoves(board: Board): MoveArr;
}
export class Knight extends Piece {
  constructor(row: number, col: number, side: boolean);
  checkMoves(board: Board): never[];
}
export class Bishop extends Piece {
  constructor(row: number, col: number, side: boolean);
  bishopBounds(i: number, size: number): boolean;
  checkMoves(board: Board): MoveArr;
}
export class Pawn extends Piece {
  constructor(row: number, col: number, side: boolean);
  checkMoves(board: Board): never[];
}
export class King extends Piece {
  constructor(row: number, col: number, side: boolean);
  checkMoves(board: Board): MoveArr;
}
export class Queen extends Piece {
  constructor(row: number, col: number, side: boolean);
  checkMoves(board: Board): never[];
}
export class Vanguard extends Piece {
  constructor(row: number, col: number, side: boolean);
  checkMoves(board: Board): never[];
}

export type BoardSize = 8 | 10 | 12 | 14 | 16;
export interface Board {
  size: BoardSize;
  arr: (Piece | null)[][];
}
export interface Lobby {
  code: string;
  started: boolean;
  whiteTurn: boolean; // is host white or black
  whiteCol: number[];
  blackCol: number[];
  size: BoardSize;
}
export interface Game extends Lobby {
  board: Board;
  // white turn becomes whether it's white's turn or not
}

export interface Move {
  oldPos: [number, number];
  newPos: [number, number];
}

// vanguard positions
export interface Settings {
  columns: number[];
  size: BoardSize;
}
