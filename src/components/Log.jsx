export default function Log({ turns, name }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {name[turn.player]} selected {turn.square.row}, {turn.square.col}
          </li>
        );
      })}
    </ol>
  );
}
