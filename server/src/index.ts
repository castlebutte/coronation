import Express from "express";
import { Socket, Server } from "socket.io";
import { Move } from "../../types";

const app = Express();
const router = Express.Router();

const port = 5002;

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
  socket.on("move", (move: Move) => {});
});
