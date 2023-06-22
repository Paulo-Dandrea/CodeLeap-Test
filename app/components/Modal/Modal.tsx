import { ChangeEvent, useState } from "react";
import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import styles from "./Modal.module.css";
import { TextArea, TextInput } from "../TextInput/TextInput";

interface ModalProps {
    children: React.ReactNode;
    alternative?: boolean;
}

export const Modal = ({
    children,
    alternative = false,
}: ModalProps) => (
    <div
        className={`
      ${styles.modal}
      ${alternative ? styles["bg-2"] : styles["bg-1"]}
      `}
    >
        <div
            className={`
            flex flex-column gap-1
             ${styles["modal-content"]} 
             ${alternative ? styles["size-2"] : styles["size-1"]}
            
             `}
        >
            {children}
        </div>
    </div>
);

interface DeleteModalProps {
    handleCancelClick: () => void;
    handleDeleteClick: () => void;
}

export const DeleteModal = ({
    handleCancelClick,
    handleDeleteClick,
}: DeleteModalProps) => {
    return (
        <Modal alternative>
            <div className="pb-1">
                <Heading
                    text="Are you sure you want to delete this item?"
                    accent={false}
                />
            </div>
            <div className="margin-left-auto">
                <div className="flex gap-1">
                    <Button onClick={handleCancelClick} color="white">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteClick} color="alert">
                        Delete
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

interface EditModalProps {
    handleCancelClick: () => void;
    handleSaveClick: () => void;
}

export const EditModal = ({
    handleCancelClick,
    handleSaveClick,
}: EditModalProps) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (
        e: ChangeEvent<HTMLTextAreaElement>
    ) => {
        setContent(e.target.value);
    };

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
