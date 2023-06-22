import { useEffect, useState } from "react";
import { Post } from "./types";
import { getPosts } from "./api";
import styles from "./PostList.module.css";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="card">{children}</div>;
};

const Post = ({
  item: { username, created_datetime, title, content },
}: {
  item: Post;
}) => {
  return (
    <Card>
      <div className={styles.card}>
        <h2>{title}</h2>
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
