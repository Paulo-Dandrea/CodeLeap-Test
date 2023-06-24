import { useRef } from "react";
import { useDispatch } from "react-redux";
import { shouldGetPostsSlice, useSelector } from "@/lib/redux";

import { createPost } from "./api";

import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Heading } from "../Heading/Heading";
import { TextAreaWithRef, TextInputWithRef } from "../TextInput/TextInput";

export const CreatePost = () => {
    const dispatch = useDispatch();

    const { userName } = useSelector((state) => state.auth);

    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLTextAreaElement>(null);

    const handleButtonClick = () => {
        const title = titleRef.current?.value;
        const content = contentRef.current?.value;

        createPost({
            username: userName,
            created_datetime: new Date(),
            title: title!,
            content: content!,
        });

        dispatch(shouldGetPostsSlice.actions.update());
    };

    return (
        <Card>
            <div className="flex flex-column gap-1">
                <Heading text="What's on your mind?" />
                <form className="flex flex-column gap-1">
                    <TextInputWithRef
                        label="Title"
                        placeholder="Hello world"
                        id="title"
                        ref={titleRef}
                    />

                    <TextAreaWithRef
                        ref={contentRef}
                        label="Content"
                        id="content"
                        placeholder="Content here"
                    />

                    <div className="margin-left-auto">
                        <Button color="primary" onClick={handleButtonClick}>
                            Create
                        </Button>
                    </div>
                </form>
            </div>
        </Card>
    );
};
