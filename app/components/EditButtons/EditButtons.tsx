import Image from "next/image";
import { useState } from "react";
import { Modal } from "../Modal/Modal";


export const EditButtons = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleEditClick = () => {
        setIsEditModalOpen(true);
    };

    const handleDeleteClick = () => {
        setIsDeleteModalOpen(true);
    };

    const handleModalAction = () => {
        // Perform action related to the modal
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
    };

    const handleModalCancel = () => {
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
    };

    return (
        <div className="space-between gap-1">
            <button onClick={handleDeleteClick}>
                <Image
                    src="ic_baseline-delete-forever.svg"
                    alt="edit"
                    width={30}
                    height={30}
                />
            </button>
            <button onClick={handleEditClick}>
                <Image
                    src="bx_bx-edit.svg"
                    alt="edit"
                    width={30}
                    height={30}
                />
            </button>

            {isDeleteModalOpen && (
                <DeleteModal
                    handleModalAction={handleModalAction}
                    handleModalCancel={handleModalCancel}
                />
            )}
        </div>
    );
};

export const DeleteModal = ({
    handleModalAction,
    handleModalCancel,
}) => {
    return (
        <Modal>
            <p>Modal content goes here</p>
            <button onClick={handleModalAction}>Take Action</button>
            <button onClick={handleModalCancel}>Cancel</button>
        </Modal>
    );
};
