import styles from "./Button.module.css";

interface ButtonProps {
    color: "primary" | "alert" | "action" | "white";
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}

export const Button = ({ color, onClick, disabled, children }: ButtonProps) => {
    const colors = {
        primary: styles.blue,
        alert: styles.red,
        action: styles.green,
        white: styles.white,
    };

    const classes = [styles.btn, colors[color]].join(" ");

    return (
        <button type="button" onClick={onClick} disabled={disabled} className={classes}>
            {children}
        </button>
    );
};
