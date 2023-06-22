import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import styles from "./Modal.module.css";

interface ModalProps {
    children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => (
    <div className={styles.modal}>
        <div className={`flex flex-column gap-1 ${styles["modal-content"]}`}>
            {children}
        </div>
    </div>
);


export const DeleteModal = ({
    handleModalAction,
    handleModalCancel,
}) => {
    return (
        <Modal>
            <h1>
                Are you sure you want to delete this item? This action
            </h1>
            <Heading text="Are you sure you want to delete this item?" accent={false} />
            <div className="margin-left-auto">
                <div className="flex gap-1">
                    <Button onClick={handleModalCancel} color="white">
                        Cancel
                    </Button>
                    <Button onClick={handleModalAction} color="alert">
                        Delete
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
