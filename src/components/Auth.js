import { useDispatch } from "react-redux";

import { authActions } from "../store";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(authActions.login());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={handleSubmit}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
