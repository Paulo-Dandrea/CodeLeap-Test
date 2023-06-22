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

    const handleDeleteModalOpen = () => {
        setIsDeleteModalOpen(true);
    };

    const handleDeleteClick = () => {
        deletePost(id);
        dispatch(shouldGetPostsSlice.actions.update());
        setIsDeleteModalOpen(false);
    };

    const editMethods = {
        handleEditModalOpen: () => {
            setIsEditModalOpen(true);
        },
        handleTitleChange: (e: ChangeEvent<HTMLInputElement>) => {
            setEditedTitle(e.target.value);
        },
        handleContentChange: (
            e: ChangeEvent<HTMLTextAreaElement>
        ) => {
            setEditedContent(e.target.value);
        },
        handleSaveClick: () => {
            console.log("editedTitle: ", editedTitle);
            console.log("editedContent: ", editedContent);
            console.log("id: ", id);
            updatePost(id, {
                title: editedTitle,
                content: editedContent,
            });

            dispatch(shouldGetPostsSlice.actions.update());
            setIsEditModalOpen(false);
        },
    };

    // const handleEditModalOpen = () => {
    //     setIsEditModalOpen(true);
    // };

    // const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setEditedTitle(e.target.value);
    // };

    // const handleContentChange = (
    //     e: ChangeEvent<HTMLTextAreaElement>
    // ) => {
    //     setEditedContent(e.target.value);
    // };

    // const handleSaveClick = () => {
    //     dispatch(shouldGetPostsSlice.actions.update());
    //     setIsEditModalOpen(false);
    // };

    const handleCancelClick = () => {
        setIsDeleteModalOpen(false);
        setIsEditModalOpen(false);
    };

    const modalOpeners = {
        handleDeleteModalOpen: () => handleDeleteModalOpen(),
        handleEditModalOpen: () => editMethods.handleEditModalOpen(),
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
                        title={editedTitle}
                        content={editedContent}
                        handleTitleChange={
                            editMethods.handleTitleChange
                        }
                        handleContentChange={
                            editMethods.handleContentChange
                        }
                        handleSaveClick={editMethods.handleSaveClick}
                        handleCancelClick={handleCancelClick}
                    />
                )}
            </div>
        </Card>
    );
};
