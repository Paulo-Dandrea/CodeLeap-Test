import { ChangeEvent, useState } from "react";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Heading } from "../Heading/Heading";
import { TextArea, TextInput } from "../TextInput/TextInput";
import { createPost } from "./api";
import { useDispatch } from "react-redux";
import { shouldGetPostsSlice, useSelector } from "@/lib/redux";

export const CreatePost = () => {
    const dispatch = useDispatch();
    const { userName } = useSelector((state) => state.auth);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleButtonClick = () => {
        createPost({
            username: userName,
            created_datetime: new Date(),
            title,
            content,
        });

        setTitle("");
        setContent("");
        dispatch(shouldGetPostsSlice.actions.update());
    };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    return (
        <Card>
            <div className={`flex flex-column gap-1 `}>
                <Heading text="What's on your mind?" />
                <form className="flex flex-column gap-1">
                    <TextInput
                        value={title}
                        label="Title"
                        placeholder="Hello world"
                        id="title"
                        onChange={handleTitleChange}
                    />

                    <TextArea
                        value={content}
                        label="Content"
                        id="content"
                        placeholder="Content here"
                        onChange={handleContentChange}
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
