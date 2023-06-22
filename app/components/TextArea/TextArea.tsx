import styles from './TextArea.module.css'
export const TextArea = ({
    value,
    onChange,
  }: {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }) => {
    return (
      <div className={styles['input-group']}>
        <label htmlFor="username">Please enter your username</label>
        <br />
        <input
          type="text"
          id="username"
          value={value}
          placeholder="John doe"
          onChange={onChange}
        />
      </div>
    );
  };
  