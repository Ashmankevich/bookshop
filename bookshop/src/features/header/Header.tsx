import style from "./Header.module.css";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({
  children,
  className = " ",
}) => {
  return <h1 className={`${style.title} ${className}`}>{children}</h1>;
};
