import Image from "next/image";

interface EditButtonsProps {
    modalOpeners?: {
        handleDeleteModalOpen: () => void;
        handleEditModalOpen: () => void;
    };
}

export const EditButtons = ({ modalOpeners }: EditButtonsProps) => {
    return (
        <div className="space-between gap-1">
            <button onClick={modalOpeners && modalOpeners.handleDeleteModalOpen}>
                <Image src="ic_baseline-delete-forever.svg" alt="edit" width={30} height={30} />
            </button>
            <button onClick={modalOpeners && modalOpeners.handleEditModalOpen}>
                <Image src="bx_bx-edit.svg" alt="edit" width={30} height={30} />
            </button>
        </div>
    );
};
