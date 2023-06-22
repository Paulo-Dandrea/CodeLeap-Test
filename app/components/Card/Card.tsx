import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};
