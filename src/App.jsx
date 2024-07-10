import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialPlayerName="Player 1" symbol="X" />
          <Player initialPlayerName="Player 2" symbol="Y" />
        </ol>
        <GameBoard />
      </div>
    </>
  );
}

export default App;
