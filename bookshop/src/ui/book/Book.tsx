import style from "./Book.module.css";

type BookProps = {
  children: React.ReactNode;
  className?: string;
};

export const Book: React.FC<BookProps> = ({ children, className = " " }) => {
  return <h1 className={`${style.title} ${className}`}>{children}</h1>;
};
