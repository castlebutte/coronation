import { Board } from "../../../types";
export default function BoardDisp({ board }: { board: Board }) {
  return (
    <>
      {board.arr.map((row, i) => (
        <div className="row" key={`${i}`}>
          {row.map((col, j) => (
            <div className={( (i+j) % 2 ) ? "col" : "black" } key={`${i}-${j}`}>
              {/* Piece or null */}
              {col}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
 