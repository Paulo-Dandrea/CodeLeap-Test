"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, authSlice, useSelector } from "@/lib/redux";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { TextInput } from "../TextInput/TextInput";
import { Modal } from "../Modal/Modal";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const [username, setUsername] = useState("");


    // useEffect(() => {
    //     if (isLoggedIn) {
    //         router.push("/posts");
    //     }
    // }, [isLoggedIn]);


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
