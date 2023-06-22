import { ChangeEvent, useState } from "react";
import { shouldGetPostsSlice, useDispatch } from "@/lib/redux";
import { deletePost } from "./api";
import { Post } from "./types";
import { Card } from "../Card/Card";
import { DeleteModal, EditModal } from "../Modal";
import { formatTimeAgo } from "@/lib/helpers";
import { updatePost } from "./api/updatePost";

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
    const [editedTitle, setEditedTitle] = useState("");
    const [editedContent, setEditedContent] = useState("");

    const deleteMethods = {
        handleDeleteModalOpen: () => {
            setIsDeleteModalOpen(true);
        },
        handleDeleteClick: () => {
            deletePost(id);
            dispatch(shouldGetPostsSlice.actions.update());
            setIsDeleteModalOpen(false);
        },
    };

    const editMethods = {
        handleEditModalOpen: () => {
            setIsEditModalOpen(true);
        },
        handleTitleChange: (e: ChangeEvent<HTMLInputElement>) => {
            setEditedTitle(e.target.value);
        },
        handleContentChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            setEditedContent(e.target.value);
        },
        handleSaveClick: () => {
            updatePost(id, {
                title: editedTitle,
                content: editedContent,
            });

            dispatch(shouldGetPostsSlice.actions.update());
            setIsEditModalOpen(false);
        },
    };

    const handleCancelClick = () => {
        setIsDeleteModalOpen(false);
        setIsEditModalOpen(false);
    };

    const modalOpeners = {
        handleDeleteModalOpen: () => deleteMethods.handleDeleteModalOpen(),
        handleEditModalOpen: () => editMethods.handleEditModalOpen(),
    };

    return (
        <Card title={title} modalOpeners={editable ? modalOpeners : undefined}>
            <div className="fs-450">
                <div className="space-between fc-neutral-600 pb-1">
                    <p>@{username}</p>
                    <p>{formatTimeAgo(created_datetime)}</p>
                </div>
                <p className="content">{content}</p>

                {isDeleteModalOpen && (
                    <DeleteModal
                        handleCancelClick={handleCancelClick}
                        handleDeleteClick={deleteMethods.handleDeleteClick}
                    />
                )}

                {isEditModalOpen && (
                    <EditModal
                        title={editedTitle}
                        content={editedContent}
                        handleTitleChange={editMethods.handleTitleChange}
                        handleContentChange={editMethods.handleContentChange}
                        handleSaveClick={editMethods.handleSaveClick}
                        handleCancelClick={handleCancelClick}
                    />
                )}
            </div>
        </Card>
    );
};
