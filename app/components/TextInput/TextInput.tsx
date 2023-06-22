import styles from "./TextInput.module.css";

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
}: TextInputProps) => {
  return (
    <div className={styles["input-group"]}>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        type="text"
        id={id}
        value={value}
        placeholder="John doe"
        onChange={onChange}
      />
    </div>
  );
};
