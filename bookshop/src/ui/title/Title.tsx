import style from "./Title.module.css";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const Title: React.FC<TitleProps> = ({ children, className = " " }) => {
  return (
    <div className={style.wrapper}>
      <h1 className={`${style.title} ${className}`}>{children}</h1>
    </div>
  );
};
