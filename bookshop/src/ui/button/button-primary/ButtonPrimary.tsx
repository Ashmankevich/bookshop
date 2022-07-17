import style from "./ButtonPrimary.module.css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  role?: string;
};

export const ButtonPrimary: React.FC<ButtonProps> = ({
  children,
  className = "",
  type = "button",
  onClick,
  role,
}) => {
  return (
    <button
      className={`${style.button} ${className}`}
      type={type}
      onClick={onClick}
      role={role}
    >
      {children}
    </button>
  );
};
