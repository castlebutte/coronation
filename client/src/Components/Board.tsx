import React from "react";

export default function Board() {
  const board = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
  ];
  return (
    <>
      {board.map((row, i) => (
        <div className="row" key={`${i}`}>
          {row.map((col, j) => (
            <div className="col" key={`${i}-${j}`}>
              {col}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
