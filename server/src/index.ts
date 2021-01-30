import Express from "express";
import { Socket, Server } from "socket.io";
import { Game, Lobby, Move, Settings } from "../../types";
import { new8x8board } from "../../types/board";

const app = Express();
const router = Express.Router();

const port = 5002;
const games: { [T: string]: Lobby } = {};

function randCode() {
  return (Math.floor(Math.random() * 90000) + 10000).toString();
}
const gameExists = (code: string) => games[code] != null;

function createRoom() {
  let code = randCode();
  while (gameExists(code)) code = randCode();

  games[code] = {
    started: false,
    whiteTurn: true,
    whiteCol: [],
    blackCol: [],
  };
  return code;
}

function makeMove(code: string, move: Move) {
  const game = games[code] as Game;
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
  socket.on("host", (fn) => {
    const code = createRoom();
    socket.join(code);
    fn({ code });
  });
  socket.on("join", (code, fn) => {
    if (!gameExists(code)) return fn({ ok: false, message: "no room" });
    const game = games[code];
    if (game.started) return fn({ ok: false, message: "game started" });
    socket.join(code);
    fn({ ok: true, messsage: "joined room" });
  });
  socket.on("start", (fn) => {
    const code = getCode(socket);
    if (!gameExists(code)) return fn({ ok: false, board: null });
    const game = games[code] as Game;
    game.started = true;
    game.board = new8x8board(game.whiteCol, game.blackCol);
    game.whiteTurn = true;
    socket.emit("start", game);
  });
  socket.on("setting", (setting: Settings, side: boolean, fn) => {
    const code = getCode(socket);
    if (!gameExists(code)) return fn({ ok: false, message: "no room" });
    const game = games[code];
    if (game.started) return fn({ ok: false, message: "game started" });
    game[side ? "whiteCol" : "blackCol"] = setting.columns;
    socket.emit("setting", game);
  });
  socket.on("move", (move: Move) => {
    const code = getCode(socket);
    makeMove(code, move);
  });
});
