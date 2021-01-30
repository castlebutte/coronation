import Express from "express";
import { Socket, Server } from "socket.io";

const app = Express();
const router = Express.Router();

const port = 5001;

router.get("/", (_, res) => {
  res.send("Hello, thyck bois and gorls of the world!");
});

app.use("/h2h", router);

const server = app.listen(port, () => console.log("Listening on port " + port));
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
  path: "/h2h",
});

io.on("connection", (socket: Socket) => {
  socket.on("start", () => {});
});
