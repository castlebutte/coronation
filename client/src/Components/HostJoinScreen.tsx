import useTextField from "../useTextField";
import socket from "../socket";
import "./components.css";
import { Lobby } from "../../../types";

import { ReactComponent as Host } from "../Assets/host_button.svg";
import { ReactComponent as Join } from "../Assets/join_button.svg";

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
    <div className="hostJoinScreen">
      <h1 className="mediumText">Host Game</h1>
      <a className="buttonBox" href="/waiting">
        <Host />
      </a>
      <h1 className="mediumText">Join Game</h1>
      <form className="inputField">
        <label className="smallText">
          Enter a game code:
          <input type="text" value={code} onChange={codeHandler} />
        </label>
      </form>
      <a className="buttonBox" href="/waiting">
        <Join />
      </a>
    </div>
  );
}
