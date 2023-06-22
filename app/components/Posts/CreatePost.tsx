// "use client";
import { createPost } from "./api/getPosts";
import styles from './CreatePost.module.css'

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
      <div className={styles.card}>
        <h2>What's on your mind?</h2>
        <form>
          <label>
            Title
            <input type="text" placeholder="Hello world" />
          </label>
  
          <textarea placeholder="Content"></textarea>
  
          <button type="button" onClick={handleButtonClick}>
            Create
          </button>
        </form>
      </div>
    );
  };