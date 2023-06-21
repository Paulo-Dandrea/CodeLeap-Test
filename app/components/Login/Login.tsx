"use client";
import { useState } from "react";
import { useDispatch, authSlice } from "@/lib/redux";
import styles from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = async () => {
    dispatch(authSlice.actions.login(username));
  };

  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <h2>Welcome to CodeLeap network!</h2>
        <form>
          <div>
            <label htmlFor="username">Please enter your username</label>
            <br />
            <input
              type="text"
              id="username"
              value={username}
              placeholder="John doe"
              onChange={handleUsernameChange}
            />
          </div>
          <div className={styles["button-container"]}>
            <button type="button" onClick={handleLogin} disabled={!username}>
              ENTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

{
  /* <div className="modal-content">
<h2>Login</h2>
<form>
  <label>
    Username:
    <input
      type="text"
      value={username}
      onChange={handleUsernameChange}
      onKeyPress={handleKeyPress}
    />
  </label>
  <br />
  <label>
    Password:
    <input
      type="password"
      value={password}
      onChange={handlePasswordChange}
      onKeyPress={handleKeyPress}
    />
  </label>
  <br />
  <button type="button" onClick={handleLogin}>
    Login
  </button>
</form>
</div> */
}
