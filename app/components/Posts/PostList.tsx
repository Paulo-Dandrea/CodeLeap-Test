import { useEffect, useState } from "react";
import { Post } from "./types";
import { getPosts } from "./api";
import styles from "./PostList.module.css";
import { Card } from "../Card/Card";
import { Heading } from "../Heading/Heading";

const formatTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const minutesAgo = Math.floor((now - date) / 60000); // Calculate the difference in minutes

  if (minutesAgo < 1) {
    return 'just now';
  } else if (minutesAgo === 1) {
    return '1 minute ago';
  } else {
    return `${minutesAgo} minutes ago`;
  }
};



interface PostProps {
  item: Post;
}

const Post = ({
  item: { username, created_datetime, title, content },
}: PostProps) => {
  return (
    <Card title={title}>
      {/* <div className={styles.card}> */}
      {/* <Heading text={title} accent={true} /> */}
      <div>
        <div className="space-between">
          <p>@{username}</p>
          {/* Transform in minutes ago */}
          <p>{formatTimeAgo(created_datetime)}</p>
        </div>
        <p className="content">{content}</p>
      </div>

      {/* </div> */}
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
