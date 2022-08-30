import style from "./ButtonBack.module.css";

type ButtonBackProps = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ButtonBack: React.FC<ButtonBackProps> = ({
  className = "",
  onClick,
}) => {
  return (
    <button className={`${style.button} ${className}`} onClick={onClick}>
      <div></div>
    </button>
  );
};
