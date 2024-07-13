export default function TimerChallenge({ title, targetTime }) {
  return (
    <>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button>Stop / Start</button>
        </p>
        <p className="">Time is running... / Time is inactive</p>
      </section>
    </>
  );
}
