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
    socket.emit(
      "join",
      code,
      ({
        ok,
        message,
        game,
      }: {
        ok: boolean;
        message: string;
        game: Lobby;
      }) => {
        console.log(ok);
        console.log(message);
        console.log(game);
        if (ok) {
          history.push("/waiting");
        }
      }
    );
  }
  function hostGame() {
    socket.emit("host", (code: string) => {
      console.log(code);
      history.push("/waiting");
    });
  }
  return (
    <div className="hostJoinScreen">
      <h1 className="mediumText">Host Game</h1>
      <div className="buttonBox" onClick={hostGame}>
        <Host />
      </div>
      <h1 className="mediumText">Join Game</h1>
      <div className="inputField">
        <input
          placeholder="Enter a game code: "
          type="number"
          value={code}
          onChange={codeHandler}
        />
      </div>
      <div className="buttonBox" onClick={joinGame}>
        <Join />
      </div>
    </div>
  );
}
