import { Ref, useRef, useState } from "react";
import { shouldGetPostsSlice, useDispatch } from "@/lib/redux";
import { formatTimeAgo } from "@/lib/helpers";

import { deletePost } from "./api";
import { Post } from "./types";

import { Card } from "../Card/Card";
import { DeleteModal, EditModal } from "../Modal";

import { updatePost } from "./api/updatePost";

interface PostProps {
    item: Post;
    editable?: boolean;
}

interface Refs {
    editedTitleRef: React.RefObject<HTMLInputElement> | null;
    editedContentRef: React.RefObject<HTMLTextAreaElement> | null;
}


export const PostItem = ({
    item: { username, created_datetime, title, content, id },
    editable = false,
}: PostProps) => {
    const dispatch = useDispatch();

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const editedTitleRef = useRef<HTMLInputElement>(null);
    const editedContentRef = useRef<HTMLTextAreaElement>(null);

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
        
        handleSaveClick: () => {
            const title = editedTitleRef.current?.value;
            const content = editedContentRef.current?.value;
            updatePost(id, {
                title: title!,
                content: content!,
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
                        ref={{ editedTitleRef, editedContentRef } as unknown as Ref<Refs>}
                        handleSaveClick={editMethods.handleSaveClick}
                        handleCancelClick={handleCancelClick}
                    />
                )}
            </div>
        </Card>
    );
};
