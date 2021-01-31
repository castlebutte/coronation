import { Game, Piece } from "../types.d";
import { useState } from "react";
import { createPiece } from "../Pieces";

import { ReactComponent as BlackBishop } from "../Assets/gamepieces/black_bishop.svg";
import { ReactComponent as BlackKing } from "../Assets/gamepieces/black_king.svg";
import { ReactComponent as BlackKnight } from "../Assets/gamepieces/black_knight.svg";
import { ReactComponent as BlackPawn } from "../Assets/gamepieces/black_pawn.svg";
import { ReactComponent as BlackQueen } from "../Assets/gamepieces/black_queen.svg";
import { ReactComponent as BlackRook } from "../Assets/gamepieces/black_rook.svg";
import { ReactComponent as BlackVanguard } from "../Assets/gamepieces/black_vanguard.svg";
import { ReactComponent as WhiteBishop } from "../Assets/gamepieces/white_bishop.svg";
import { ReactComponent as WhiteKing } from "../Assets/gamepieces/white_king.svg";
import { ReactComponent as WhiteKnight } from "../Assets/gamepieces/white_knight.svg";
import { ReactComponent as WhitePawn } from "../Assets/gamepieces/white_pawn.svg";
import { ReactComponent as WhiteQueen } from "../Assets/gamepieces/white_queen.svg";
import { ReactComponent as WhiteRook } from "../Assets/gamepieces/white_rook.svg";
import { ReactComponent as WhiteVanguard } from "../Assets/gamepieces/white_vanguard.svg";

export default function BoardDisp({ game }: { game: Game }) {
  const [arr, setArr] = useState(game.board.arr);
  const clickHandlerCreator = (row: number, col: number) => () => {
    let piece = game.board.arr[row][col];
    if (piece == null) return;
    piece = createPiece(piece);
    console.log(piece);
    const moves = piece.checkMoves(game.board);
    console.log(moves);
    setArr((arr) => {
      let newArr = [...arr];
      moves.forEach((move) => {
        newArr[move[0]][move[1]] = new Piece(-1, -1, false, "selected");
      });
      return newArr;
    });
  };
  return (
    <>
      {arr.map((row, i) => (
        <div className="row" key={`${i}`}>
          {row.map((col, j) => (
            <div
              className={(i + j) % 2 ? "black" : "col"}
              key={`${i}-${j}`}
              onClick={clickHandlerCreator(i, j)}
            >
              {col?.side ? (
                col === null ? null : col.type === "pawn" ? (
                  <BlackPawn />
                ) : col.type === "knight" ? (
                  <BlackKnight />
                ) : col.type === "queen" ? (
                  <BlackQueen />
                ) : col.type === "king" ? (
                  <BlackKing />
                ) : col.type === "bishop" ? (
                  <BlackBishop />
                ) : col.type === "rook" ? (
                  <BlackRook />
                ) : col.type === "vanguard" ? (
                  <BlackVanguard />
                ) : null
              ) : col === null ? null : col.type === "pawn" ? (
                <WhitePawn />
              ) : col.type === "knight" ? (
                <WhiteKnight />
              ) : col.type === "queen" ? (
                <WhiteQueen />
              ) : col.type === "king" ? (
                <WhiteKing />
              ) : col.type === "bishop" ? (
                <WhiteBishop />
              ) : col.type === "rook" ? (
                <WhiteRook />
              ) : col.type === "vanguard" ? (
                <WhiteVanguard />
              ) : col.type === "selected" ? (

              ) : null}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
