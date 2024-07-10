export default function Player({ playerName, symbol }) {
  return (
    <li>
      <span className="player">
        <span className="player-name">{playerName}</span>
        <span className="symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
