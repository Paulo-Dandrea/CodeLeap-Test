import Image from "next/image";
import { useState } from "react";
import { DeleteModal, Modal } from "../Modal/Modal";
import { Heading } from "../Heading/Heading";
import { Button } from "../Button/Button";

interface EditButtonsProps {
    handleDeleteModalOpen?: () => void;
}

export const EditButtons = ({
    handleDeleteModalOpen,
}: EditButtonsProps) => {
    return (
        <div className="space-between gap-1">
            <button onClick={handleDeleteModalOpen}>
                <Image
                    src="ic_baseline-delete-forever.svg"
                    alt="edit"
                    width={30}
                    height={30}
                />
            </button>
            {/* <button onClick={handleEditClick}>
                <Image
                    src="bx_bx-edit.svg"
                    alt="edit"
                    width={30}
                    height={30}
                />
            </button> */}
        </div>
    );
};
