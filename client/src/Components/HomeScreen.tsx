import React from "react";
import "./components.css";
import { ReactComponent as CorgiLogo } from "../Assets/corgi_logo.svg";
import { ReactComponent as Team } from "../Assets/castle_butte.svg";
import { ReactComponent as Start } from "../Assets/start_button.svg";
import { ReactComponent as Title } from "../Assets/coronation.svg";

export default function HomeScreen() {
  return (
    <div className="screen">
      <div className="titleBox">
        <CorgiLogo />
        <Title />
      </div>
      <a href="/hostjoin">
        <Start />
      </a>
      <div className="teamBox">
        <Team />
      </div>
    </div>
  );
}
