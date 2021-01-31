import { Board } from "../../types/";

function inBounds(i: number, j: number, size: number) {
  return i >= 0 && i < size && j >= 0 && j < size;
}
export type MoveArr = [row: number, col: number][];
export type PieceType =
  | "rook"
  | "knight"
  | "bishop"
  | "pawn"
  | "queen"
  | "king"
  | "vanguard"
  | "selected";

export function createPiece(piece: Piece) {
  const { position: pos, side, type } = piece;
  switch (type) {
    case "bishop":
      return new Bishop(pos[0], pos[1], side);
    case "rook":
      return new Rook(pos[0], pos[1], side);
    case "queen":
      return new Queen(pos[0], pos[1], side);
    case "king":
      return new King(pos[0], pos[1], side);
    case "pawn":
      return new Pawn(pos[0], pos[1], side);
    case "vanguard":
      return new Vanguard(pos[0], pos[1], side);
    case "knight":
      return new Knight(pos[0], pos[1], side);
    default:
      return new Piece(pos[0], pos[1], side, "selected");
  }
}
export class Piece {
  type: PieceType;
  position: [number, number];
  side: boolean;
  constructor(row: number, col: number, side: boolean, type: PieceType) {
    this.position = [row, col];
    this.side = side;
    this.type = type;
  }
  move(row: number, col: number) {
    this.position = [row, col];
  }
  checkMoves(board: Board): MoveArr {
    return [];
  }
}
export class Rook extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side, "rook");
  }
  checkMoves(board: Board) {
    const moves: MoveArr = [];
    // do each direction

    // up
    for (let j = this.position[1] - 1; j >= 0; j--) {
      if (!inBounds(j, this.position[1], board.size)) continue;
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
    for (let j = this.position[1] + 1; j < board.size; j++) {
      if (!inBounds(j, this.position[1], board.size)) continue;
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
    super(row, col, side, "knight");
  }
  checkMoves(board: Board) {
    // check all directions
    //i apologize for this array lmao
    const [row, col] = this.position;
    const options: MoveArr = [
      [row - 2, col - 2],
      [row - 2, col],
      [row - 2, col + 2],
      [row, col - 2],
      [row, col + 2],
      [row + 2, col - 2],
      [row + 2, col],
      [row + 2, col + 2],
      [row - 3, col - 3],
      [row - 3, col],
      [row - 3, col + 3],
      [row, col - 3],
      [row, col + 3],
      [row + 3, col - 3],
      [row + 3, col],
      [row + 3, col + 3],
      [row - 4, col - 4],
      [row - 4, col],
      [row - 4, col + 4],
      [row, col - 4],
      [row, col + 4],
      [row + 4, col - 4],
      [row + 4, col],
      [row + 4, col + 4],
    ];
    const moves: MoveArr = options.filter((move) => {
      if (!inBounds(move[0], move[1], board.size)) return false;
      const tile = board.arr[move[0]][move[1]];
      return tile === null || tile.side !== this.side;
    });
    return moves;
  }
}
export class Bishop extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side, "bishop");
  }
  bishopBounds(i: number, size: number) {
    return (
      this.position[0] + i < size &&
      this.position[1] + i < size &&
      this.position[0] - i >= 0 &&
      this.position[1] - i >= 0
    );
  }
  checkMoves(board: Board) {
    const moves: MoveArr = [];
    // do every direction
    for (let i = 1; this.bishopBounds(i, board.size); i++) {
      const pairs: [number, number][] = [
        [this.position[0] - i, this.position[1] - i],
        [this.position[0] - i, this.position[1] + i],
        [this.position[0] + i, this.position[1] - i],
        [this.position[0] + i, this.position[1] + i],
      ];
      const tiles = [
        board.arr[pairs[0][0]][pairs[0][1]],
        board.arr[pairs[1][0]][pairs[1][1]],
        board.arr[pairs[2][0]][pairs[2][1]],
        board.arr[pairs[3][0]][pairs[3][1]],
      ];
      for (let i = 0; i < 4; i++) {
        if (tiles[i] === null) {
          // empty
          moves.push(pairs[i]);
        } else if (tiles[i]?.side !== this.side) {
          // enemy piece
          moves.push(pairs[i]);
          break;
        } else {
          // ally piece
          break;
        }
      }
    }

    return moves;
  }
}
export class Pawn extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side, "pawn");
  }
  checkMoves(board: Board) {
    // check all directions
    const options: MoveArr = [
      [this.position[0] + (this.side ? 1 : -1), this.position[1]],
      [this.position[0] + (this.side ? 2 : -2), this.position[1]],
      [this.position[0] + (this.side ? 3 : -3), this.position[1]],
    ];
    const moves: MoveArr = [];
    options.forEach((move) => {
      if (
        move[0] < 0 ||
        move[0] >= board.size ||
        move[1] < 0 ||
        move[1] >= board.size
      )
        return;
      const tile = board.arr[move[0]][move[1]];
      if (tile === null) {
        moves.push([move[0], move[1]]);
      } else if (tile.side !== this.side) {
        if (board.arr[move[0]][move[1] + 1]?.side !== this.side) {
          if (move[1] + 1 >= board.size) {
            return;
          } else {
            moves.push([move[0], move[1] + 1]);
          }
        } else if (board.arr[move[0]][move[1] - 1]?.side !== this.side) {
          if (move[1] - 1 < 0) {
            return;
          } else {
            moves.push([move[0], move[1] - 1]);
          }
        }
      }
    });
    return moves;
  }
}

export class King extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side, "king");
  }
  checkMoves(board: Board) {
    // check all directions
    const options: MoveArr = [
      [this.position[0] - 1, this.position[1] - 1],
      [this.position[0] - 1, this.position[1]],
      [this.position[0] - 1, this.position[1] + 1],
      [this.position[0], this.position[1] - 1],
      [this.position[0], this.position[1] + 1],
      [this.position[0] + 1, this.position[1] - 1],
      [this.position[0] + 1, this.position[1]],
      [this.position[0] + 1, this.position[1] + 1],
    ];
    const moves: MoveArr = options.filter((move) => {
      if (
        move[0] < 0 ||
        move[0] >= board.size ||
        move[1] < 0 ||
        move[1] >= board.size
      )
        return false;
      const tile = board.arr[move[0]][move[1]];
      return tile === null || tile.side !== this.side;
    });
    return moves;
  }
}

export class Queen extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side, "queen");
  }
  checkMoves(board: Board) {
    // bruh
    return [];
  }
}

export class Vanguard extends Piece {
  constructor(row: number, col: number, side: boolean) {
    super(row, col, side, "vanguard");
  }
  checkMoves(board: Board) {
    const moves: MoveArr = [];
    let firstMoveVert = [];
    let firstMoveHor = [];
    // do each direction

    // up
    for (let j = this.position[1] - 1; j >= 0; j--) {
      if (!inBounds(j, this.position[1], board.size)) continue;
      const tile = board.arr[j][this.position[1]];
      if (tile === null) {
        firstMoveVert.push([j, this.position[1]]);
      } else {
        break;
      }
    }
    // down
    for (let i = this.position[1] + 1; i < board.size; i++) {
      if (!inBounds(i, this.position[1], board.size)) continue;
      const tile = board.arr[i][this.position[1]];
      if (tile === null) {
        firstMoveVert.push([i, this.position[1]]);
      } else {
        break;
      }
    }
    // left
    for (let j = this.position[1] - 1; j >= 0; j--) {
      if (!inBounds(this.position[1], 0, board.size)) continue;
      const tile = board.arr[this.position[0]][j];
      if (tile === null) {
        firstMoveHor.push([this.position[0], j]);
      } else {
        break;
      }
    }
    // right
    for (let j = this.position[1] + 1; j < board.size; j++) {
      if (!inBounds(this.position[0], 0, board.size)) continue;
      const tile = board.arr[this.position[0]][j];
      if (tile === null) {
        firstMoveHor.push([this.position[0], j]);
      } else {
        break;
      }
    }

    // second part of the L

    // up
    for (let i = 0; i < firstMoveHor.length; i++) {
      for (let j = firstMoveHor[i][1] - 1; j >= 0; j--) {
        const tile = board.arr[j][this.position[1]];
        if (tile === null) {
          moves.push([j, firstMoveHor[i][1]]);
        } else {
          break;
        }
      }
    }
    // down
    for (let i = 0; i < firstMoveHor.length; i++) {
      for (let j = firstMoveHor[i][1] + 1; j < board.size; j++) {
        const tile = board.arr[j][this.position[1]];
        if (tile === null) {
          moves.push([j, firstMoveHor[i][1]]);
        } else {
          break;
        }
      }
    }
    // left
    for (let i = 0; i < firstMoveVert.length; i++) {
      for (let j = firstMoveVert[i][1] - 1; j >= 0; j--) {
        const tile = board.arr[this.position[0]][j];
        if (tile === null) {
          moves.push([firstMoveHor[i][0], j]);
        } else {
          break;
        }
      }
    }
    // right
    for (let i = 0; i < firstMoveVert.length; i++) {
      for (let j = firstMoveVert[i][1] + 1; j < board.size; j++) {
        const tile = board.arr[this.position[0]][j];
        if (tile === null) {
          moves.push([firstMoveHor[i][0], j]);
        } else {
          break;
        }
      }
    }

    return moves;
  }
}
