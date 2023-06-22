import { useEffect, useState } from "react";
import { deletePost, getPosts } from "./api";
import { Post } from "./types";
import { Card } from "../Card/Card";
import { formatTimeAgo } from "@/lib/helpers";
import {
    shouldGetPostsSlice,
    useDispatch,
    useSelector,
} from "@/lib/redux";
import { DeleteModal, EditModal } from "../Modal/Modal";

interface PostProps {
    item: Post;
    editable?: boolean;
}

const Post = ({
    item: { username, created_datetime, title, content, id },
    editable = false,
}: PostProps) => {
    const dispatch = useDispatch();

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleDeleteModalOpen = () => {
        setIsDeleteModalOpen(true);
    };

    const handleEditModalOpen = () => {
        setIsEditModalOpen(true);
    };

    const handleCancelClick = () => {
        setIsDeleteModalOpen(false);
        setIsEditModalOpen(false);
    };

    const handleDeleteClick = () => {
        deletePost(id);
        dispatch(shouldGetPostsSlice.actions.update());
        setIsDeleteModalOpen(false);
    };

    const handleSaveClick = () => {
        dispatch(shouldGetPostsSlice.actions.update());
        setIsEditModalOpen(false);
    };

    const modalOpeners = {
        handleDeleteModalOpen: () => handleDeleteModalOpen(),
        handleEditModalOpen: () => handleEditModalOpen(),
    };

    return (
        <Card
            title={title}
            modalOpeners={editable ? modalOpeners : undefined}
        >
            <div className="fs-450">
                <div className="space-between fc-neutral-600 pb-1">
                    <p>@{username}</p>
                    <p>{formatTimeAgo(created_datetime)}</p>
                </div>
                <p className="content">{content}</p>

                {isDeleteModalOpen && (
                    <DeleteModal
                        handleCancelClick={handleCancelClick}
                        handleDeleteClick={handleDeleteClick}
                    />
                )}

                {isEditModalOpen && (
                    <EditModal
                        handleCancelClick={handleCancelClick}
                        handleSaveClick={handleSaveClick}
                    />
                )}
            </div>
        </Card>
    );
};

// TODO: Cards que aceitam title e o type of title, assim como no botão e aceitam children
// TODO: Title component

export const PostList = () => {
    const dispatch = useDispatch();

    const { userName } = useSelector((state) => state.auth);
    const { shouldGetPosts } = useSelector(
        (state) => state.shouldGetPosts
    );

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getPosts().then((posts) => setPosts(posts));
        dispatch(shouldGetPostsSlice.actions.doNotUpdate());
    }, [shouldGetPosts]);

    return (
        <>
            {!posts.length ? (
                // TODO: Loading component
                <>Loading...</>
            ) : (
                posts.map((item) => {
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
                })
            )}
        </>
    );
};
