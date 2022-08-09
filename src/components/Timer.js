import React from "react";
import fireicon from "../assets/icons/fire.png";

function Timer({ timervalue }) {
  return (
    <div className="timer">
      <span className="icon">
        <img src={fireicon} className="timer__icon" alt="" />
      </span>{" "}
      <span>{timervalue}</span>
    </div>
  );
}

export default Timer;
