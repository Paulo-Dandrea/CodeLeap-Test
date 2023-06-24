import { forwardRef } from "react";

import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { Modal } from "./Modal";
import { TextAreaWithRef, TextInputWithRef } from "../TextInput/TextInput";

import { Refs } from "../Posts/types";

interface EditModalProps {
    handleCancelClick: () => void;
    handleSaveClick: () => void;
}

export const EditModal = forwardRef<Refs, EditModalProps>(
    ({ handleCancelClick, handleSaveClick }, ref) => {
        const { editedTitleRef, editedContentRef } = ref as unknown as Refs;

        return (
            <Modal alternative>
                <Heading text="Edit Item" />
                <form className="flex flex-column gap-1">
                    <TextInputWithRef
                        ref={editedTitleRef}
                        label="Title"
                        placeholder="Hello world"
                        id="title"
                    />

                    <TextAreaWithRef
                        ref={editedContentRef}
                        label="Content"
                        id="content"
                        placeholder="Content here"
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
    }
);
