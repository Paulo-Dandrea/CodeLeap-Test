import { Heading } from "../Heading/Heading";

import styles from "./Card.module.css";

interface CardProps {
    children: React.ReactNode;
    title?: string;
    modalOpeners?: {
        handleDeleteModalOpen: () => void;
        handleEditModalOpen: () => void;
    };
}

export const Card = ({ children, title, modalOpeners }: CardProps) => {
    return (
        <div className={`${styles.card} ${title ? styles["with-title"] : ""}`}>
            {title && <Heading text={title} accent modalOpeners={modalOpeners} />}
            {children}
        </div>
    );
};
