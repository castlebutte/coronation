import { useHistory } from "react-router-dom";
import useTextField from "../useTextField";
import socket from "../socket";
import "./components.css";
import { Lobby } from "../../../types";

import { ReactComponent as Host } from "../Assets/host_button.svg";
import { ReactComponent as Join } from "../Assets/join_button.svg";

export default function HostJoinScreen() {
  const history = useHistory();
  const [code, codeHandler] = useTextField("");
  function joinGame() {
    socket.emit("join", code, ({ ok, game }: { ok: boolean; game: Lobby }) => {
      if (ok) {
        history.push({ pathname: "/waiting", state: game });
      }
    });
  }
  function hostGame() {
    socket.emit("host", ({ code, game }: { code: string; game: Lobby }) => {
      console.log(code);
      history.push({ pathname: "/waiting", state: game });
    });
  }
  return (
    <div className="hostJoinScreen">
      <h1 className="mediumText">Host Game</h1>
      <div className="buttonBox" onClick={hostGame}>
        <Host />
      </div>
      <h1 className="mediumText">Join Game</h1>
      <form className="inputField">
        <label className="smallText">
          Enter a game code:
          <input type="text" value={code} onChange={codeHandler} />
        </label>
      </form>
      <div className="buttonBox" onClick={joinGame}>
        <Join />
      </div>
    </div>
  );
}
