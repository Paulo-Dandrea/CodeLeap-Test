import { useState } from "react";
import { shouldGetPostsSlice, useDispatch } from "@/lib/redux";
import { deletePost } from "./api";
import { Post } from "./types";
import { Card } from "../Card/Card";
import { DeleteModal, EditModal } from "../Modal/Modal";
import { formatTimeAgo } from "@/lib/helpers";

interface PostProps {
    item: Post;
    editable?: boolean;
}

export const PostItem = ({
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
