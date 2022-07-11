import style from "./Subscribe.module.css";

type SubscribeProps = {
  children: React.ReactNode;
  className?: string;
};

export const Subscribe: React.FC<SubscribeProps> = ({
  children,
  className = " ",
}) => {
  return <h1 className={`${style.title} ${className}`}>{children}</h1>;
};
