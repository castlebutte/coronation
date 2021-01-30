import {
  Piece,
  Vanguard,
  King,
  Bishop,
  Knight,
  Queen,
  Pawn,
  Rook,
} from "./Pieces";
import { Board, BoardSize } from "../../types";

function createArray<T>(len: number, itm: T): T[] {
  let arr1 = [itm];
  let arr2: T[] = [];
  while (len > 0) {
    if (len & 1) arr2 = arr2.concat(arr1);
    arr1 = arr1.concat(arr1);
    len >>>= 1;
  }
  return arr2;
}

/**
 * @param whiteCol the columns of the vanguards
 * @param blackCol the columns of the vanguards
 */
export const newBoard = (
  sizeBoard: BoardSize,
  whiteCol: number[],
  blackCol: number[]
): Board => {
  const whitePawns: Piece[] = [];
  for (let i = 0; i < sizeBoard - 1; ++i) {
    whitePawns.push(
      whiteCol.includes(i) ? new Vanguard(1, i, true) : new Pawn(1, i, true)
    );
  }
  const blackPawns: Piece[] = [];
  for (let i = 0; i < sizeBoard - 1; ++i) {
    blackPawns.push(
      blackCol.includes(i) ? new Vanguard(6, i, true) : new Pawn(6, i, true)
    );
  }
  if (sizeBoard == 10) {
    return {
      size: sizeBoard,
      arr: [
        [
          new Rook(0, 0, true),
          new Knight(0, 1, true),
          new Knight(0, 2, true),
          new Bishop(0, 3, true),
          new Queen(0, 4, true),
          new King(0, 5, true),
          new Bishop(0, 6, true),
          new Knight(0, 7, true),
          new Knight(0, 8, true),
          new Rook(0, 9, true),
        ],
        whitePawns,
        ...createArray(5, createArray(10, null)),
        blackPawns,
        [
          new Rook(0, 0, true),
          new Knight(0, 1, true),
          new Knight(0, 2, true),
          new Bishop(0, 3, true),
          new Queen(0, 4, true),
          new King(0, 5, true),
          new Bishop(0, 6, true),
          new Knight(0, 7, true),
          new Knight(0, 8, true),
          new Rook(0, 9, true),
        ],
      ],
    };
  } else if (sizeBoard == 12) {
    return {
      size: sizeBoard,
      arr: [
        [
          new Rook(0, 0, true),
          new Knight(0, 1, true),
          new Knight(0, 2, true),
          new Bishop(0, 3, true),
          new Bishop(0, 4, true),
          new Queen(0, 5, true),
          new King(0, 6, true),
          new Bishop(0, 7, true),
          new Bishop(0, 8, true),
          new Knight(0, 9, true),
          new Knight(0, 10, true),
          new Rook(0, 11, true),
        ],
        whitePawns,
        ...createArray(6, createArray(12, null)),
        blackPawns,
        [
          new Rook(0, 0, true),
          new Knight(0, 1, true),
          new Knight(0, 2, true),
          new Bishop(0, 3, true),
          new Bishop(0, 4, true),
          new Queen(0, 5, true),
          new King(0, 6, true),
          new Bishop(0, 7, true),
          new Bishop(0, 8, true),
          new Knight(0, 9, true),
          new Knight(0, 10, true),
          new Rook(0, 11, true),
        ],
      ],
    };
  } else if (sizeBoard == 14) {
    return {
      size: sizeBoard,
      arr: [
        [
          new Rook(0, 0, true),
          new Rook(0, 1, true),
          new Knight(0, 2, true),
          new Knight(0, 3, true),
          new Bishop(0, 4, true),
          new Bishop(0, 5, true),
          new Queen(0, 6, true),
          new King(0, 7, true),
          new Bishop(0, 8, true),
          new Bishop(0, 9, true),
          new Knight(0, 10, true),
          new Knight(0, 11, true),
          new Rook(0, 11, true),
          new Rook(0, 12, true),
        ],
        whitePawns,
        ...createArray(7, createArray(14, null)),
        blackPawns,
        [
          new Rook(0, 0, true),
          new Rook(0, 1, true),
          new Knight(0, 2, true),
          new Knight(0, 3, true),
          new Bishop(0, 4, true),
          new Bishop(0, 5, true),
          new Queen(0, 6, true),
          new King(0, 7, true),
          new Bishop(0, 8, true),
          new Bishop(0, 9, true),
          new Knight(0, 10, true),
          new Knight(0, 11, true),
          new Rook(0, 11, true),
          new Rook(0, 12, true),
        ],
      ],
    };
  } else if (sizeBoard == 16) {
    return {
      size: sizeBoard,
      arr: [
        [
          new Rook(0, 0, true),
          new Rook(0, 1, true),
          new Knight(0, 2, true),
          new Knight(0, 3, true),
          new Bishop(0, 4, true),
          new Bishop(0, 5, true),
          new Queen(0, 6, true),
          new Queen(0, 7, true),
          new King(0, 8, true),
          new Queen(0, 9, true),
          new Bishop(0, 10, true),
          new Bishop(0, 11, true),
          new Knight(0, 12, true),
          new Knight(0, 13, true),
          new Rook(0, 14, true),
          new Rook(0, 15, true),
        ],
        whitePawns,
        ...createArray(8, createArray(16, null)),
        blackPawns,
        [
          new Rook(0, 0, true),
          new Rook(0, 1, true),
          new Knight(0, 2, true),
          new Knight(0, 3, true),
          new Bishop(0, 4, true),
          new Bishop(0, 5, true),
          new Queen(0, 6, true),
          new Queen(0, 7, true),
          new King(0, 8, true),
          new Queen(0, 9, true),
          new Bishop(0, 10, true),
          new Bishop(0, 11, true),
          new Knight(0, 12, true),
          new Knight(0, 13, true),
          new Rook(0, 14, true),
          new Rook(0, 15, true),
        ],
      ],
    };
  } else {
    return {
      size: sizeBoard,
      arr: [
        [
          new Rook(0, 0, true),
          new Knight(0, 1, true),
          new Bishop(0, 2, true),
          new Queen(0, 3, true),
          new King(0, 4, true),
          new Bishop(0, 5, true),
          new Knight(0, 6, true),
          new Rook(0, 7, true),
        ],
        whitePawns,
        ...createArray(4, createArray(8, null)),
        blackPawns,
        [
          new Rook(7, 0, true),
          new Knight(7, 1, true),
          new Bishop(7, 2, true),
          new Queen(7, 3, true),
          new King(7, 4, true),
          new Bishop(7, 5, true),
          new Knight(7, 6, true),
          new Rook(7, 7, true),
        ],
      ],
    };
  }
};
