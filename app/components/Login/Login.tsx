"use client";
import { ChangeEvent, useState } from "react";
import { useDispatch, authSlice } from "@/lib/redux";
import { Button } from "../Button/Button";
import styles from "./Login.module.css";
import { Heading } from "../Heading/Heading";
import {  TextInput } from "../TextInput/TextInput";

// TODO: Change indentiation to 4
// TODO: Max lines - 100 or 80
// TODO: Adjust order of imports

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleLogin = async () => {
    dispatch(authSlice.actions.login(username));
  };

  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <Heading text="Welcome to CodeLeap network!" />
        <form>
          {/* <div>
            <label htmlFor="username">Please enter your username</label>
            <br />
            <input
              type="text"
              id="username"
              value={username}
              placeholder="John doe"
              onChange={handleUsernameChange}
            />
          </div> */}
          <TextInput
            value={username}
            onChange={handleUsernameChange}
            placeholder="John doe"
            id="username"
            label="Please enter your username"
          />

          <div className={styles["button-container"]}>
            <Button color="primary" onClick={handleLogin} disabled={!username}>
              ENTER
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
