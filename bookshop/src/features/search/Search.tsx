import style from "./Search.module.css";

type SearchProps = {
  children: React.ReactNode;
  className?: string;
};

export const Search: React.FC<SearchProps> = ({
  children,
  className = " ",
}) => {
  return <h1 className={`${style.title} ${className}`}>{children}</h1>;
};
