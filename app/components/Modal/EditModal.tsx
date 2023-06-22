import { ChangeEvent, useState } from "react";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { Modal } from "./Modal";
import { TextArea, TextInput } from "../TextInput/TextInput";

interface EditModalProps {
    handleCancelClick: () => void;
    handleSaveClick: () => void;
    handleTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleContentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    title: string;
    content: string;
}

export const EditModal = ({
    handleCancelClick,
    handleSaveClick,
    handleTitleChange,
    handleContentChange,
    title,
    content,
}: EditModalProps) => {
    return (
        <Modal alternative>
            <Heading text="Edit Item" />
            <form className="flex flex-column gap-1">
                <TextInput
                    value={title}
                    label="Title"
                    placeholder="Hello world"
                    id="title"
                    onChange={handleTitleChange}
                />

                <TextArea
                    value={content}
                    label="Content"
                    id="content"
                    placeholder="Content here"
                    onChange={handleContentChange}
                />
            </form>

            <div className="margin-left-auto">
                <div className="flex gap-1">
                    <Button onClick={handleCancelClick} color="white">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveClick} color="action">
                        Save
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
