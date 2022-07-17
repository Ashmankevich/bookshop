import style from "./ButtonBack.module.css";

type ButtonBackProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ButtonBack: React.FC<ButtonBackProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button className={`${style.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
