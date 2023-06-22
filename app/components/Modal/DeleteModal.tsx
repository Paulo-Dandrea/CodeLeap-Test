import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { Modal } from "./Modal";

interface DeleteModalProps {
    handleCancelClick: () => void;
    handleDeleteClick: () => void;
}

export const DeleteModal = ({ handleCancelClick, handleDeleteClick }: DeleteModalProps) => {
    return (
        <Modal alternative>
            <div className="pb-1">
                <Heading text="Are you sure you want to delete this item?" accent={false} />
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
