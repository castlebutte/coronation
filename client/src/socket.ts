import { io } from "socket.io-client";
const socket = () => io("https://thyck.top", { path: "/chess" });
export default socket();
