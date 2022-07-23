import style from "./BookItem.module.css";
import { Link } from "react-router-dom";
import { NewBookApi } from "../../../store/types";

type BookItemProps = {
  book: NewBookApi;
};

export const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className={style.wrapper} key={book.isbn13}>
      <Link
        className={style.link}
        to={`/bookshop/detailed-book/${book.isbn13}`}
      >
        <img className={style.pic} src={book.image} alt={book.title} />
        <h2 className={style.title}>{book.title}</h2>
        <h3 className={style.subtitle}>{book.subtitle}</h3>
        <div className={style.price}>
          {book.price === "$0.00" ? "Not Available" : book.price}
        </div>
      </Link>
    </div>
  );
};
