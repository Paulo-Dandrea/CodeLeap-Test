"use client";
import { ChangeEvent, useState } from "react";
import { useDispatch, authSlice } from "@/lib/redux";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { TextInput } from "../TextInput/TextInput";
import { Modal } from "../Modal/Modal";

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
        <Modal>
            <Heading text="Welcome to CodeLeap network!" />
            <form className="flex flex-column gap-1">
                <TextInput
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="John doe"
                    id="username"
                    label="Please enter your username"
                />

                <div className="margin-left-auto">
                    <Button color="primary" onClick={handleLogin} disabled={!username}>
                        ENTER
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default Login;
