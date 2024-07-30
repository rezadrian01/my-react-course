export default function Error({ title, content }) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
