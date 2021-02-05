import { Board } from "../../types/";

function inBounds(i: number, j: number, size: number) {
  return i >= 0 && i < size && j >= 0 && j < size;
}
export type Tile = [row: number, col: number];
export type MoveArr = Tile[];
export type PieceType =
  | "rook"
  | "knight"
  | "bishop"
  | "pawn"
  | "queen"
  | "king"
  | "vanguard"
  | "selected";

function bishopBounds([row, col]: Tile, i: number, size: number) {
  return row + i < size && col + i < size && row - i >= 0 && col - i >= 0;
}

type MoveObj = {
  [T in PieceType]: (piece: Piece, board: Board) => MoveArr;
};

const moves: MoveObj = {
  vanguard: function (piece: Piece, board: Board) {
    const moves: MoveArr = [];
    let firstMoveVert = [];
    let firstMoveHor = [];
    // do each direction

    // up
    for (let j = piece.position[1] - 1; j >= 0; j--) {
      if (!inBounds(j, piece.position[1], board.size)) continue;
      const tile = board.arr[j][piece.position[1]];
      if (tile === null) {
        firstMoveVert.push([j, piece.position[1]]);
      } else {
        break;
      }
    }
    // down
    for (let i = piece.position[1] + 1; i < board.size; i++) {
      if (!inBounds(i, piece.position[1], board.size)) continue;
      const tile = board.arr[i][piece.position[1]];
      if (tile === null) {
        firstMoveVert.push([i, piece.position[1]]);
      } else {
        break;
      }
    }
    // left
    for (let j = piece.position[1] - 1; j >= 0; j--) {
      if (!inBounds(piece.position[1], 0, board.size)) continue;
      const tile = board.arr[piece.position[0]][j];
      if (tile === null) {
        firstMoveHor.push([piece.position[0], j]);
      } else {
        break;
      }
    }
    // right
    for (let j = piece.position[1] + 1; j < board.size; j++) {
      if (!inBounds(piece.position[0], 0, board.size)) continue;
      const tile = board.arr[piece.position[0]][j];
      if (tile === null) {
        firstMoveHor.push([piece.position[0], j]);
      } else {
        break;
      }
    }

    // second part of the L

    // up
    for (let i = 0; i < firstMoveHor.length; i++) {
      for (let j = firstMoveHor[i][1] - 1; j >= 0; j--) {
        const tile = board.arr[j][piece.position[1]];
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
        const tile = board.arr[j][piece.position[1]];
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
        const tile = board.arr[piece.position[0]][j];
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
        const tile = board.arr[piece.position[0]][j];
        if (tile === null) {
          moves.push([firstMoveHor[i][0], j]);
        } else {
          break;
        }
      }
    }
    console.log(firstMoveHor);
    console.log(firstMoveVert);
    return moves;
  },
  king: function (piece: Piece, board: Board) {
    // check all directions
    const options: MoveArr = [
      [piece.position[0] - 1, piece.position[1] - 1],
      [piece.position[0] - 1, piece.position[1]],
      [piece.position[0] - 1, piece.position[1] + 1],
      [piece.position[0], piece.position[1] - 1],
      [piece.position[0], piece.position[1] + 1],
      [piece.position[0] + 1, piece.position[1] - 1],
      [piece.position[0] + 1, piece.position[1]],
      [piece.position[0] + 1, piece.position[1] + 1],
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
      return tile === null || tile.side !== piece.side;
    });
    return moves;
  },
  rook: function (piece: Piece, board: Board) {
    const moves: MoveArr = [];
    // do each direction

    // up
    for (let j = piece.position[1] - 1; j >= 0; j--) {
      if (!inBounds(j, piece.position[1], board.size)) continue;
      const tile = board.arr[j][piece.position[1]];
      if (tile === null) {
        moves.push([j, piece.position[1]]);
      } else if (tile.side !== piece.side) {
        moves.push([j, piece.position[1]]);
        break;
      } else {
        break;
      }
    }
    // down
    for (let j = piece.position[1] + 1; j < board.size; j++) {
      if (!inBounds(j, piece.position[1], board.size)) continue;
      const tile = board.arr[j][piece.position[1]];
      if (tile === null) {
        moves.push([j, piece.position[1]]);
      } else if (tile.side !== piece.side) {
        moves.push([j, piece.position[1]]);
        break;
      } else {
        break;
      }
    }
    // left
    for (let j = piece.position[1] - 1; j >= 0; j--) {
      const tile = board.arr[piece.position[0]][j];
      if (tile === null) {
        moves.push([piece.position[0], j]);
      } else if (tile.side !== piece.side) {
        moves.push([piece.position[0], j]);
        break;
      } else {
        break;
      }
    }
    // right
    for (let j = piece.position[1] + 1; j < board.size; j++) {
      const tile = board.arr[piece.position[0]][j];
      if (tile === null) {
        moves.push([piece.position[0], j]);
      } else if (tile.side !== piece.side) {
        moves.push([piece.position[0], j]);
        break;
      } else {
        break;
      }
    }

    return moves;
  },
  pawn: function (piece: Piece, board: Board) {
    // check all directions
    const options: MoveArr = [
      [piece.position[0] + (piece.side ? 1 : -1), piece.position[1]],
      [piece.position[0] + (piece.side ? 2 : -2), piece.position[1]],
      [piece.position[0] + (piece.side ? 3 : -3), piece.position[1]],
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
      if (tile) {
        options.pop();
        options.pop();
      } else if (tile) {
        options.pop();
      }

      if (tile === null) {
        moves.push([move[0], move[1]]);
      } else if (tile.side !== piece.side) {
        if (board.arr[move[0]][move[1] + 1]?.side !== piece.side) {
          if (move[1] + 1 >= board.size) {
            return;
          } else {
            moves.push([move[0], move[1] + 1]);
            if (board.arr[move[0]][move[1] - 1]?.side !== piece.side) {
              if (move[1] - 1 < 0) {
                return;
              } else {
                moves.push([move[0], move[1] - 1]);
              }
            }
          }
        }
      }
    });
    return moves;
  },
  knight: function (piece: Piece, board: Board) {
    // check all directions
    //i apologize for this array lmao
    const [row, col] = piece.position;
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
      return tile === null || tile.side !== piece.side;
    });
    return moves;
  },
  bishop: function (piece: Piece, board: Board) {
    const moves: MoveArr = [];
    // do every direction
    for (let i = 1; bishopBounds(piece.position, i, board.size); i++) {
      const pairs: [number, number][] = [
        [piece.position[0] - i, piece.position[1] - i],
        [piece.position[0] - i, piece.position[1] + i],
        [piece.position[0] + i, piece.position[1] - i],
        [piece.position[0] + i, piece.position[1] + i],
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
        } else if (tiles[i]?.side !== piece.side) {
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
  },
  queen: function (piece: Piece, board: Board) {
    return [];
  },
  selected: function (piece: Piece, board: Board) {
    return [];
  },
};

export function createPiece(piece: Piece) {
  const {
    position: [row, col],
    side,
    type,
  } = piece;
  return new Piece(row, col, side, type);
}
export class Piece {
  type: PieceType;
  position: Tile;
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
    return moves[this.type](this, board);
  }
}
