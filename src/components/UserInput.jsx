export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            type="number"
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            type="number"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            value={userInput.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            type="number"
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
            type="number"
            required
          />
        </p>
      </div>
    </section>
  );
}
