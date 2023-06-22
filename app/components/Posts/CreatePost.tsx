// "use client";
import { ChangeEvent, useState } from "react";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Heading } from "../Heading/Heading";
import { TextArea, TextInput } from "../TextInput/TextInput";
// import { createPost } from "./api/getPosts";

import styles from "./CreatePost.module.css";
import { createPost } from "./api";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleButtonClick = () => {
    createPost({
      username: "prog.dandrea@xxx.xxx",
      created_datetime: new Date(),
      title: "I'm coming, CodeLeap",
      content: "CodeLeap, a radiant company, doth extend its gracious invitation to my humble self. A venture anew awaits, wherein I shall immerse myself in the realm of programming arts. With ardent enthusiasm and unyielding determination, I venture forth to join this esteemed domain. In this noble pursuit, may my skills be honed and my knowledge expanded. As I embark on this odyssey, let the code be my muse and the leap be my guiding star. Together, we shall chart a course towards innovation and excellence, unraveling the mysteries of technology. With CodeLeap as my beacon, I pledge my allegiance and dedicate myself to the pursuit of greatness. Thus, let the journey commence in the halls of CodeLeap, where possibilities abound and dreams take flight."
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
      <div className={`flex flex-column gap-1 ${styles.card}`}>
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
