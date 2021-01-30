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
  blackPcs: Piece[];
  whitePcs: Piece[];
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
    blackPcs: [
      new Rook(7, 0, true),
      new Rook(7, 7, true),
      new Knight(7, 1, true),
      new Knight(7, 6, true),
      new Bishop(7, 3, true),
      new Bishop(7, 5, true),
      new King(7, 4, true),
      new Queen(7, 3, true),
      ...blackPawns,
    ],
    whitePcs: [
      new Rook(0, 0, true),
      new Rook(0, 7, true),
      new Knight(0, 1, true),
      new Knight(0, 6, true),
      new Bishop(0, 2, true),
      new Bishop(0, 5, true),
      new King(0, 3, true),
      new Queen(0, 4, true),
      ...whitePawns,
    ],
  };
};
