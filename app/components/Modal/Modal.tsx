import styles from "./Modal.module.css";

export const Modal = ({ children }) => (
    <div className={styles.modal}>
        <div className={`flex-column-1 ${styles["modal-content"]}`}>
            {children}
        </div>
    </div>
);
