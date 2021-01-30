import { Board } from "../../../types";
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
              {/* Piece or null */}
              {JSON.stringify(col)}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
