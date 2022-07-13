import style from "./Input.module.css";

type InputProps = {
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type: string;
  label?: string;
  className?: string;
  placeholder?: string;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  type,
  className = "",
  placeholder,
}) => {
  return (
    <label className={style.label}>
      {label}
      <input
        className={`${style.input} ${className}`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
