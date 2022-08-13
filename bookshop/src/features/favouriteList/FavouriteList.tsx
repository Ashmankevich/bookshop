import { Link } from "react-router-dom";
import { FavouritePreHoverIcon } from "../../assets";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getFav } from "../../store/selectors";
import { removeFav } from "../../store/slices/favSlice";
import { Book } from "../../store/types";
import { ButtonPrimary } from "../../ui/button/button-primary/ButtonPrimary";
import { Title } from "../../ui/title/Title";
import style from "./FavouriteList.module.css";

type FavouriteListProps = {};

export const FavouriteList: React.FC<FavouriteListProps> = () => {
  const { fav } = useAppSelector(getFav);

  const dispatch = useAppDispatch();
  const handleRemoveFav = (book: Book) => {
    dispatch(removeFav(book));
  };
  return (
    <div className={style.wrapper}>
      {fav.map((book) => {
        return (
          <div className={style.container} key={book.isbn13}>
            <Link
              className={style.link}
              to={`/bookshop/detailed-book/${book.isbn13}`}
            >
              <img className={style.pic} src={book.image} alt={book.title} />
              <div className={style.row}>
                <Title className={style.title}>{book.title}</Title>
                <p className={style.subtitle}>{book.subtitle}</p>
                <p className={style.price}>
                  {book.price === "$0.00" ? "Not Available" : book.price}
                </p>
              </div>
            </Link>
            <ButtonPrimary
              className={style.removeBtn}
              type="button"
              onClick={() => handleRemoveFav(book)}
            >
              <FavouritePreHoverIcon />
            </ButtonPrimary>
          </div>
        );
      })}
    </div>
  );
};
