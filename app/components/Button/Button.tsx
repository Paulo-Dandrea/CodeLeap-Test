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

    const classes = [styles.btn, colors[color], "border-radius-1"].join(" ");

    return (
        <button type="button" className={classes}  onClick={onClick} disabled={disabled} >
            {children}
        </button>
    );
};
