import style from "./BookList.module.css";

type BookListProps = {
  children: React.ReactNode;
  className?: string;
};

export const BookList: React.FC<BookListProps> = ({
  children,
  className = " ",
}) => {
  return <h1 className={`${style.title} ${className}`}>{children}</h1>;
};
