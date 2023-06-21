import { useEffect, useState } from "react";
import { Post } from "./types";
import { getPosts } from "./api";

const Post = ({
  item: { username, created_datetime, title, content },
}: {
  item: Post;
}) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="space-between">
        <p>@{username}</p>
        {/* Transform in minutes ago */}
        <p>{created_datetime}</p>
        <p className="content">{content}</p>
      </div>
    </>
  );
};

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  console.log("posts: ", posts);
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
