import { useState } from "react";
import "./App.css";

function App() {
  const [balls, setBalls] = useState(0);
  const [runs, setRuns] = useState(0);

  function hitBall() {
  const randomRun = Math.floor(Math.random() * 7);

  setBalls(balls + 1);
  setRuns(runs + randomRun);
}

  function resetGame() {
  setBalls(0);
  setRuns(0);
}

  return (
    <div className="container">

      <div className="scoreboard">
        <h1>Cricket Score Board</h1>

        <h2>Balls : {balls}</h2>

        <h2>Runs : {runs}</h2>
      </div>

      <div className="controls">
        <p>
          You get total of 6 balls (1 over). The button gets disabled after
          that
        </p>

        <button onClick={hitBall} disabled={balls === 6}>
          Click to hit the ball
        </button>

        <button onClick={resetGame}>Reset Game</button>
      </div>

    </div>
  );
}

export default App;