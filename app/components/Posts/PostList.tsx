import { useEffect, useState } from "react";
import { getPosts } from "./api";
import { Post } from "./types";
import { Card } from "../Card/Card";
import { formatTimeAgo } from "@/lib/helpers";
import { useSelector } from "@/lib/redux";

interface PostProps {
    item: Post;
    editable?: boolean;
}

const Post = ({
    item: { username, created_datetime, title, content },
    editable = false,
}: PostProps) => {
    return (
        <Card title={title + (editable ? " (Editar)" : "")}>
            <div className="fs-450">
                <div className="space-between fc-neutral-600 pb-1">
                    <p>@{username}</p>
                    <p>{formatTimeAgo(created_datetime)}</p>
                </div>
                <p className="content">{content}</p>
            </div>
        </Card>
    );
};

// TODO: Cards que aceitam title e o type of title, assim como no botão e aceitam children
// TODO: Title component

export const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const { userName } = useSelector((state) => state.auth);

    useEffect(() => {
        getPosts().then((posts) => setPosts(posts));
    }, []);

    return (
        <>
            {posts.map((item) => {
                const editable =
                    userName.toUpperCase() ===
                    item.username.toUpperCase();
                return (
                    <Post
                        key={item.id}
                        item={item}
                        editable={editable}
                    />
                );
            })}
        </>
    );
};
