import Express from "express";
import { Socket, Server } from "socket.io";
import { Game, Move } from "../../types";

const app = Express();
const router = Express.Router();

const port = 5002;
const games: { [T: string]: Game } = {};
function makeMove(code: string, move: Move) {
  const game = games[code];
  const piece = game.board.pieces.find(
    (piece) =>
      piece.position[0] === move.oldPos[0] &&
      piece.position[1] === move.oldPos[1]
  );
  piece?.move(move.oldPos[0], move.oldPos[1]);
}

function getCode(socket: Socket) {
  return Array.from(socket.rooms)[1];
}

router.get("/", (_, res) => {
  res.send("Hello, thyck bois and gorls of the world!");
});

app.use("/chess", router);

const server = app.listen(port, () => console.log("Listening on port " + port));
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
  path: "/chess",
});

io.on("connection", (socket: Socket) => {
  socket.on("start", () => {});
  socket.on("move", (move: Move) => {
    const code = getCode(socket);
    makeMove(code, move);
  });
});
