import {Piece} from './Pieces'

export interface Board {
  size: 8 | 10 | 12 | 14 | 16;
  blackPcs: Piece[];
  whitePcs: Piece[];
}

const new8x8board = (): Board => {
  return {
    size: 8,
    blackPcs: [
      { type: "rook", position: [0, 0], move:  },
      { type: "knight", position: [0, 0] },
    ],
    whitePcs: {},
  };
};
