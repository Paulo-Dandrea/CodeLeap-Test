import { useEffect, useState } from "react";
import { Post } from "./types";
import { getPosts } from "./api";
import styles from "./PostList.module.css";
import { Card } from "../Card/Card";
import { Heading } from "../Heading/Heading";

interface PostProps {
  item: Post;
}

const Post = ({
  item: { username, created_datetime, title, content },
}: PostProps) => {
  return (
    <Card>
      <div className={styles.card}>
        <Heading text={title} accent={true}  />
        <div className="space-between">
          <p>@{username}</p>
          {/* Transform in minutes ago */}
          <p>{created_datetime}</p>
          <p className="content">{content}</p>
        </div>
      </div>
    </Card>
  );
};

// TODO: Cards que aceitam title e o type of title, assim como no botão e aceitam children
// TODO: Title component

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <>
      {posts.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </>
  );
};
