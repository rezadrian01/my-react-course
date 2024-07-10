import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function deriveActivePlayer(gameTurns) {
  let currActivePlayer = "X";
  if (gameTurns[0]?.player === "X") {
    currActivePlayer = "O";
  }
  return currActivePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      const currActivePlayer = deriveActivePlayer(prevGameTurns);
      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currActivePlayer },
        ...prevGameTurns,
      ];
      return updatedGameTurns;
    });
  }
  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialPlayerName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialPlayerName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} />
    </>
  );
}

export default App;
