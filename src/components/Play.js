import React from "react";

export default function Play(props) {
  return (
    <div className="interactions">
      <div className="interaction">
        <button onClick={props.upRed}>↑</button>
        <p>{props.red}</p>
        <button onClick={props.downRed}>↓</button>
      </div>
      <div className="interaction">
        <button onClick={props.upGreen}>↑</button>
        <p>{props.green}</p>
        <button onClick={props.downGreen}>↓</button>
      </div>
      <div className="interaction">
        <button onClick={props.upBlue}>↑</button>
        <p>{props.blue}</p>
        <button onClick={props.downBlue}>↓</button>
      </div>
    </div>
  );
}
