import Player from "./components/Player";
function App() {
  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialPlayerName="Player 1" symbol="X" />
          <Player initialPlayerName="Player 2" symbol="Y" />
        </ol>
      </div>
    </>
  );
}

export default App;
