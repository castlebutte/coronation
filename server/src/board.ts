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

function createRow(arr: string, row: number, side: boolean) {
  let rowPcs: Piece[] = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr.charAt(i)) {
      case "R":
        rowPcs.push(new Rook(row, i, side));
        break;
      case "k":
        rowPcs.push(new Knight(row, i, side));
        break;
      case "K":
        rowPcs.push(new King(row, i, side));
        break;
      case "B":
        rowPcs.push(new Bishop(row, i, side));
        break;
      case "Q":
        rowPcs.push(new Queen(row, i, side));
        break;
    }
  }
  return rowPcs;
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
  for (let i = 0; i < sizeBoard; ++i) {
    whitePawns.push(
      whiteCol.includes(i) ? new Vanguard(1, i, true) : new Pawn(1, i, true)
    );
  }
  const blackPawns: Piece[] = [];
  for (let i = 0; i < sizeBoard; ++i) {
    blackPawns.push(
      blackCol.includes(i)
        ? new Vanguard(sizeBoard - 2, i, false)
        : new Pawn(sizeBoard - 2, i, false)
    );
  }
  let row = "";
  switch (sizeBoard) {
    case 8:
      row = "RkBQKBkR";
      break;
    case 10:
      row = "kRkBQKBkRk";
      break;
    case 12:
      row = "BkRkBQKBkRkB";
      break;
    case 14:
      row = "RBkRkBQKBkRkBR";
      break;
    case 16:
      row = "RBkRkBQQKQBkRkBR";
      break;
  }
  return {
    size: sizeBoard,
    arr: [
      createRow(row.split("").reverse().join(), 0, true),
      whitePawns,
      ...createArray(sizeBoard - 4, createArray(sizeBoard, null)),
      blackPawns,
      createRow(row, sizeBoard - 2, false),
    ],
  };
};
