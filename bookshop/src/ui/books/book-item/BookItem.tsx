import style from "./BookItem.module.css";
import { Link } from "react-router-dom";
import { Book, NewBookApi } from "../../../store/types";
import { ButtonPrimary } from "../../button/button-primary/ButtonPrimary";
import { FavouritePreHoverIcon } from "../../../assets";
import { useAppDispatch } from "../../../store/hooks";
import { addFav } from "../../../store/slices/favSlice";

type BookItemProps = {
  book: NewBookApi;
};

export const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const dispatch = useAppDispatch();

  const handleFav = (book: Book) => {
    dispatch(addFav(book));
  };
  return (
    <div className={style.wrapper} key={book.isbn13}>
      <ButtonPrimary type="button" onClick={() => handleFav(book)}>
        <FavouritePreHoverIcon className={style.buttonFav} />
      </ButtonPrimary>
      <Link
        className={style.link}
        to={`/bookshop/detailed-book/${book.isbn13}`}
      >
        <img className={style.pic} src={book.image} alt={book.title} />
        <h2 className={style.title}>
          {book.title ? book.title : "Oops, smth was rong"}
        </h2>
        <h3 className={style.subtitle}>{book.subtitle}</h3>
        <div className={style.price}>
          {book.price === "$0.00" ? "Not Available" : book.price}
        </div>
      </Link>
    </div>
  );
};
