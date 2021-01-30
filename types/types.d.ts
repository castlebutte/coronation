interface Piece {
  type: "pawn" | "bishop" | "rook" | "knight" | "queen" | "king" | "vanguard";
  position: [number, number]; // -1, -1 means captured
  move: (row: number, col: number) => void;
}

interface Board {
  size: 8 | 10 | 12 | 14 | 16;
  blackPcs: Piece[];
  whitePcs: Piece[];
}
interface Game {
  started: boolean;
  whiteTurn: boolean;
}
