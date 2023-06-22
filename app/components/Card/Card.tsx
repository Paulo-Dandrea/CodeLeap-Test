import { Heading } from "../Heading/Heading";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export const Card = ({ children, title }: CardProps) => {
  return (
    <div className={`${styles.card} ${title ? styles["with-title"] : ""}`}>
      {title && <Heading text={title} accent />}
      {children}
    </div>
  );
};
