import { forwardRef } from "react";

import styles from "./TextInput.module.css";

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

export const TextAreaWithRef = forwardRef<HTMLTextAreaElement, TextInputWithRefProps>(
    ({ placeholder, id, label }, ref) => {
        return (
            <div className={styles["input-group"]}>
                <label htmlFor={id}>{label}</label>
                <br />
                <textarea ref={ref} className="border-radius-1" id={id} placeholder={placeholder} />
            </div>
        );
    }
);
