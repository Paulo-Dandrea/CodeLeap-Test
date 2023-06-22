import { Heading } from "../Heading/Heading";
import styles from "./Card.module.css";

interface CardProps {
    children: React.ReactNode;
    title?: string;
    idToBeEdited?: number | undefined;
}

export const Card = ({
    children,
    title,
    idToBeEdited = undefined,
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
                    idToBeEdited={idToBeEdited}
                />
            )}
            {children}
        </div>
    );
};
