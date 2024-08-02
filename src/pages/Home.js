import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/products");
  }
  return (
    <>
      <h1>My HomePage</h1>
      <p>
        Go to <Link to={"/products"}>Products page</Link>
      </p>
      <p>
        <button onClick={handleNavigate}>Navigate</button>
      </p>
    </>
  );
}
