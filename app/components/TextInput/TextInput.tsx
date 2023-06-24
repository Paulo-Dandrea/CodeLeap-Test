import { forwardRef } from "react";
import styles from "./TextInput.module.css";

interface TextInputProps {
    value: string;
    placeholder: string;
    id: string;
    label: string;
}

export const TextInput = ({
    value,
    onChange,
    placeholder,
    id,
    label,
}: TextInputProps & {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <div className={styles["input-group"]}>
            <label htmlFor={id}>{label}</label>
            <br />
            <input
                type="text"
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

interface TextInputWithRefProps {
    placeholder: string;
    id: string;
    label: string;
}

export const TextInputWithRef = forwardRef<HTMLInputElement, TextInputWithRefProps>(
    ({ placeholder, id, label }, ref) => {
        return (
            <div className={styles["input-group"]}>
                <label htmlFor={id}>{label}</label>
                <br />
                <input
                    className="border-radius-1"
                    type="text"
                    id={id}
                    ref={ref}
                    placeholder={placeholder}
                />
            </div>
        );
    }
);

export const TextArea = ({
    value,
    onChange,
    placeholder,
    id,
    label,
}: TextInputProps & {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
    return (
        <div className={styles["input-group"]}>
            <label htmlFor={id}>{label}</label>
            <br />
            <textarea id={id} value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    );
};
