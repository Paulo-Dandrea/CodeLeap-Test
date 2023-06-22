import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import styles from "./Modal.module.css";

interface ModalProps {
    children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => (
    <div className={styles.modal}>
        <div
            className={`flex flex-column gap-1 ${styles["modal-content"]}`}
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
        <Modal>
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
    return (
        <Modal>
            

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
                    <Button onClick={handleSaveClick} color="action">
                        Save
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
