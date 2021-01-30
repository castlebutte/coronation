import { Game } from "../../../types";
// import {ReactComponent as PawnSVG} from '../Assets/';
export default function BoardDisp({ game }: { game: Game }) {
  const clickHandlerCreator = (row: number, col: number) => () => {
    const piece = game.board.arr[row][col];
    if (piece === null) return;
    const moves = piece.checkMoves(game.board);
    moves.forEach((move) => {});
  };
  return (
    <>
      {game.board.arr.map((row, i) => (
        <div className="row" key={`${i}`}>
          {row.map((col, j) => (
            <div
              className={(i + j) % 2 ? "black" : "col"}
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
