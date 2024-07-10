import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
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
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </>
  );
}

export default App;
