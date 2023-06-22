// "use client";
import { ChangeEvent, useState } from "react";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Heading } from "../Heading/Heading";
import { TextArea, TextInput } from "../TextInput/TextInput";
import { createPost } from "./api/getPosts";
import styles from "./CreatePost.module.css";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleButtonClick = () => {
    createPost({
      username: "XXXX",
      created_datetime: new Date(),
      title: "XXXX",
      content: "XXXX",
    });
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <Card>
      <div className={styles.card}>
        <Heading text="What's on your mind?" />
        <form>
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

          <Button color="primary" onClick={handleButtonClick}>
            Create
          </Button>
        </form>
      </div>
    </Card>
  );
}; 
