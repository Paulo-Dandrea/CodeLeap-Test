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

// TODO: Imp! Should I Use useRef?

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
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
