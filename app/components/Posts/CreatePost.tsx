// "use client";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Heading } from "../Heading/Heading";
import { createPost } from "./api/getPosts";
import styles from "./CreatePost.module.css";


export const CreatePost = () => {
  const handleButtonClick = () => {
    createPost({
      username: "XXXX",
      created_datetime: new Date(),
      title: "XXXX",
      content: "XXXX",
    });
  };

  return (
    <Card>
      <div className={styles.card}>
        <Heading text="What's on your mind?" />
        <form>
          <label>
            Title
            <input type="text" placeholder="Hello world" />
          </label>

          <textarea placeholder="Content"></textarea>

          <Button color="primary" onClick={handleButtonClick}>
            Create
          </Button>
        </form>
      </div>
    </Card>
  );
};
