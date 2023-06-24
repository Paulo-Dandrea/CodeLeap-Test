import styles from "./Modal.module.css";

interface ModalProps {
    children: React.ReactNode;
    alternative?: boolean;
}

export const Modal = ({ children, alternative = false }: ModalProps) => (
    <div
        className={`
      ${styles.modal}
      ${alternative ? styles["bg-2"] : styles["bg-1"]}
      `}
    >
        <div
            className={`
            flex flex-column gap-1 border-radius-1
             ${styles["modal-content"]} 
             ${alternative ? styles["size-2"] : styles["size-1"]}
            
             `}
        >
            {children}
        </div>
    </div>
);
