import { Board, Game, Piece } from "../types.d";
import { useState, useEffect } from "react";
import { createPiece } from "../Pieces";

import { ReactComponent as BlackBishop } from "../Assets/gamepieces/black_bishop.svg";
import { ReactComponent as Move } from "../Assets/move.svg";
import { ReactComponent as Attack } from "../Assets/attack.svg";
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
import socket from "../socket";

function clearSelected(arr: Board["arr"]) {
  let newArr = [...arr];
  newArr.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col?.type === "selected") {
        newArr[i][j] = null;
      }
    });
  });
  return arr;
}

export default function BoardDisp({ game }: { game: Game }) {
  const [selected, setSelected] = useState<Piece | null>(null);
  const [arr, setArr] = useState(game.board.arr);
  useEffect(() => {
    socket.on("move", (arr: Board["arr"]) => {
      setArr(arr);
    });
    return () => {
      socket.off("move");
    };
  }, [setArr]);
  const clickHandlerCreator = (row: number, col: number) => () => {
    let piece = game.board.arr[row][col];
    if (piece == null) return;
    if (piece.type === "selected" && selected) {
      const oldPos = selected.position;
      const newPos = [row, col];
      socket.emit("move", { oldPos, newPos });
      selected.move(row, col);
      setArr((arr) => {
        let newArr = [...arr];
        newArr[oldPos[0]][oldPos[1]] = null;
        newArr[newPos[0]][newPos[1]] = selected;
        return clearSelected(newArr);
      });
      setSelected(null);
      return;
    }
    if (row === selected?.position[0] && col === selected?.position[1]) {
      console.log("same");
    } else {
      piece = createPiece(piece);
      const newArr = clearSelected(arr);
      const moves = piece.checkMoves(game.board);
      setArr(newArr);
      setSelected(piece);
      setArr((arr) => {
        let newArr = [...arr];
        moves.forEach((move) => {
          newArr[move[0]][move[1]] = {
            position: [-1, -1],
            type: "selected",
            side: false,
            checkMoves: () => [],
            move: (a, b) => [],
          };
        });
        return newArr;
      });
    }
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
                <Move />
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
