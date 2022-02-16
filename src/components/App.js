import React from "react";
import Play from "./Play";

export default function App() {
  const [red, setRed] = React.useState(100);
  const [green, setGreen] = React.useState(150);
  const [blue, setBlue] = React.useState(200);

  function upRed() {
    return setRed((prev) => prev + 10);
  }
  function downRed() {
    return setRed((prev) => prev - 10);
  }
  function upGreen() {
    return setGreen((prev) => prev + 10);
  }
  function downGreen() {
    return setGreen((prev) => prev - 10);
  }
  function upBlue() {
    return setBlue((prev) => prev + 10);
  }
  function downBlue() {
    return setBlue((prev) => prev - 10);
  }

  return (
    <div
      style={{ background: `rgb(${red}, ${green}, ${blue})` }}
      className="display"
    >
      <h1>RGB:</h1>
      <Play
        red={red}
        green={green}
        blue={blue}
        upRed={upRed}
        downRed={downRed}
        upGreen={upGreen}
        downGreen={downGreen}
        upBlue={upBlue}
        downBlue={downBlue}
      />
    </div>
  );
}
