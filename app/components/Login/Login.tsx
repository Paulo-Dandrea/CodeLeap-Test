"use client";
import { ChangeEvent, forwardRef, useRef, useState } from "react";
import { useDispatch, authSlice } from "@/lib/redux";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { TextInput, TextInputWithRef } from "../TextInput/TextInput";
import { Modal } from "../Modal/Modal";

const Login = () => {
    const dispatch = useDispatch();
    const usernameRef = useRef<HTMLInputElement>(null);

    const handleLogin = async () => {
        const username = usernameRef.current?.value;
        dispatch(authSlice.actions.login(username!));
    };

    return (
        <Modal>
            <Heading text="Welcome to CodeLeap network!" />
            <form className="flex flex-column gap-1">
                <TextInputWithRef
                    ref={usernameRef}
                    placeholder="John doe"
                    id="username"
                    label="Please enter your username"
                />

                <div className="margin-left-auto">
                    <Button color="primary" onClick={handleLogin} disabled={!usernameRef}>
                        ENTER
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default Login;
