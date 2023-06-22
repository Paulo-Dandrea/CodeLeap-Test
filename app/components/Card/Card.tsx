import { Heading } from "../Heading/Heading";
import styles from "./Card.module.css";

interface CardProps {
    children: React.ReactNode;
    title?: string;
    handleDeleteModalOpen?: () => void;
}

export const Card = ({
    children,
    title,
    handleDeleteModalOpen
}: CardProps) => {
    return (
        <div
            className={`${styles.card} ${
                title ? styles["with-title"] : ""
            }`}
        >
            {title && (
                <Heading
                    text={title}
                    accent
                    handleDeleteModalOpen={handleDeleteModalOpen}
                />
            )}
            {children}
        </div>
    );
};
