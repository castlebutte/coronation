import useTextField from "../useTextField";
import socket from "../socket";
import "./components.css";
import { Lobby } from "../../../types";

export default function HostJoinScreen() {
  const [code, codeHandler] = useTextField("");
  function joinGame() {
    socket.emit(
      "join",
      code,
      ({
        ok,
        message,
        lobby,
      }: {
        ok: boolean;
        message: string;
        lobby: Lobby;
      }) => {
        console.log(ok);
        console.log(message);
        console.log(lobby);
      }
    );
  }
  function hostGame() {
    socket.emit("host", (code: string) => {
      console.log(code);
    });
  }
  return (
    <div className="Screen">
      <header className="CorgiBox">
        <img className="CorgiBox" />
        <button onClick={hostGame}>Host game</button>
        <label>Room Code: </label>
        <input type="text" onChange={codeHandler} value={code} />
        <button onClick={joinGame}>Join game</button>
      </header>
    </div>
  );
}
