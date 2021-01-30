import { Board } from "../../../types";
export default function Board({ arr }: Board) {
  return (
    <>
      {arr.map((row, i) => (
        <div className="row" key={`${i}`}>
          {row.map((col, j) => (
            <div className="col" key={`${i}-${j}`}>
              {/* Piece or null */}
              {col}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
