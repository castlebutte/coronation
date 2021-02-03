import { io } from "socket.io-client";
const socket = () => io("http://localhost:5002", { path: "/chess" });
export default socket();
