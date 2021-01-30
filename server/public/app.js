const socket = io("https://thyck.top/", {
  path: "/chess",
});

const host = document.getElementById("host");
const join = document.getElementById("join");
const code = document.getElementById("code");

host.addEventListener("click", () => {
  socket.emit("host", (code) => {
    console.log(`Room code: ${code}`);
  });
});
join.addEventListener("click", () => {
  const roomCode = code.value;
  socket.emit("join", roomCode, ({ ok, message }) => {
    console.log(ok);
    console.log(message);
  });
});
