import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "../../../second/project 2/src/winning-combination";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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
  const gameBoard = [...initialGameBoard.map((row) => [...row])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSelectedSquare =
      gameBoard[combination[0].row][combination[0].column];
    const secondSelectedSquare =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSelectedSquare =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSelectedSquare &&
      firstSelectedSquare === secondSelectedSquare &&
      firstSelectedSquare === thirdSelectedSquare
    ) {
      winner = firstSelectedSquare;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

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
        {(winner || hasDraw) && <GameOver winner={winner} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </>
  );
}

export default App;
