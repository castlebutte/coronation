import { Board } from "../../../types";
// import {ReactComponent as PawnSVG} from '../Assets/';
export default function BoardDisp({ board }: { board: Board }) {
  const clickHandlerCreator = (row: number, col: number) => () => {
    const piece = board.arr[row][col];
    // piece.checkMoves() -> [number, number] []
  };
  return (
    <>
      {board.arr.map((row, i) => (
        <div className="row" key={`${i}`}>
          {row.map((col, j) => (
            <div
              className={(i + j) % 2 ? "col" : "black"}
              key={`${i}-${j}`}
              onClick={clickHandlerCreator(i, j)}
            >
              {col === null ? null : col.type === "pawn" ? (
                <>Pawn</>
              ) : col.type === "knight" ? (
                <>Knight</>
              ) : col.type === "queen" ? (
                <>Queen</>
              ) : col.type === "king" ? (
                <>King</>
              ) : col.type === "bishop" ? (
                <>Bishop</>
              ) : col.type === "rook" ? (
                <>Rook</>
              ) : col.type === "vanguard" ? (
                <>Vanguard</>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
