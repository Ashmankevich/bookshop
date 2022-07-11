import style from "./Footer.module.css";

type FooterProps = {
  children: React.ReactNode;
  className?: string;
};

export const Footer: React.FC<FooterProps> = ({
  children,
  className = " ",
}) => {
  return <h1 className={`${style.title} ${className}`}>{children}</h1>;
};
