"use client";
import { ChangeEvent, useState } from "react";
import { useDispatch, authSlice } from "@/lib/redux";
import styles from "./Login.module.css";
import { Button } from "../Button/Button";

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
                <h2>Welcome to CodeLeap network!</h2>
                <form>
                    <div>
                        <label htmlFor="username">
                            Please enter your username
                        </label>
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
                        <Button
                            color="primary"
                            onClick={handleLogin}
                            disabled={!username}
                        >
                            ENTER
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
