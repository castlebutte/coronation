import {
  Bishop,
  Knight,
  Piece,
  Rook,
  Pawn,
  Queen,
  King,
  Vanguard,
} from "./Pieces";

export interface Board {
  size: 8 | 10 | 12 | 14 | 16;
  arr: (Piece | null)[][];
}

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
 *
 * @param whiteCol the columns of the vanguards
 * @param blackCol the columns of the vanguards
 */
export const new8x8board = (whiteCol: number[], blackCol: number[]): Board => {
  const whitePawns: Piece[] = [];
  for (let i = 0; i < 7; ++i) {
    whitePawns.push(
      whiteCol.includes(i) ? new Vanguard(1, i, true) : new Pawn(1, i, true)
    );
  }
  const blackPawns: Piece[] = [];
  for (let i = 0; i < 7; ++i) {
    blackPawns.push(
      blackCol.includes(i) ? new Vanguard(6, i, true) : new Pawn(6, i, true)
    );
  }
  return {
    size: 8,
    arr: [
      [
        new Rook(0, 0, true),
        new Knight(0, 1, true),
        new Bishop(0, 2, true),
        new King(0, 3, true),
        new Queen(0, 4, true),
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
};
