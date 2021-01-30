import { Board } from "./board";
export abstract class Piece {
  position: [number, number];
  side: boolean;
  constructor(row: number, col: number, side: boolean) {
    this.position = [row, col];
    this.side = side;
  }
  move(row: number, col: number) {
    this.position = [row, col];
  }
  abstract checkMoves(board: Board): [row: number, col: number][];
}
export class Rook extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side);
  }
  checkMoves(board: Board) {
    return [];
  }
}
export class Knight extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side);
  }
  checkMoves(board: Board) {
    return [];
  }
}
export class Bishop extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side);
  }
  checkMoves(board: Board) {
    return [];
  }
}
export class Pawn extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side);
  }
  checkMoves(board: Board) {
    return [];
  }
}
