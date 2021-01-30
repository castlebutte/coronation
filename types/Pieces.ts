import { Board } from "./board";
export type MoveArr = [row: number, col: number][];
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
  abstract checkMoves(board: Board): MoveArr;
}
export class Rook extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side);
  }
  checkMoves(board: Board) {
    const moves: MoveArr = [];
    // do each direction

    // up
    for (let j = this.position[1] - 1; j >= 0; j--) {
      const tile = board.arr[j][this.position[1]];
      if (tile === null) {
        moves.push([j, this.position[1]]);
      } else if (tile.side !== this.side) {
        moves.push([j, this.position[1]]);
        break;
      } else {
        break;
      }
    }
    // down
    for (let i = this.position[1] + 1; i < board.size; i++) {
      const tile = board.arr[i][this.position[1]];
      if (tile === null) {
        moves.push([i, this.position[1]]);
      } else if (tile.side !== this.side) {
        moves.push([i, this.position[1]]);
        break;
      } else {
        break;
      }
    }
    // left
    for (let j = this.position[1] - 1; j >= 0; j--) {
      const tile = board.arr[this.position[0]][j];
      if (tile === null) {
        moves.push([this.position[0], j]);
      } else if (tile.side !== this.side) {
        moves.push([this.position[0], j]);
        break;
      } else {
        break;
      }
    }
    // right
    for (let j = this.position[1] + 1; j < board.size; j++) {
      const tile = board.arr[this.position[0]][j];
      if (tile === null) {
        moves.push([this.position[0], j]);
      } else if (tile.side !== this.side) {
        moves.push([this.position[0], j]);
        break;
      } else {
        break;
      }
    }

    return moves;
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

export class King extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side);
  }
  checkMoves(board: Board) {
    return [];
  }
}

export class Queen extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side);
  }
  checkMoves(board: Board) {
    return [];
  }
}

export class Vanguard extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side);
  }
  checkMoves(board: Board) {
    return [];
  }
}
