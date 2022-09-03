import style from "./BookDetails.module.css";
import { ButtonPrimary } from "../../button/button-primary/ButtonPrimary";
import { Book, GetBookDetailsApi } from "../../../store/types";
import { addCart } from "../../../store/slices/cartSlice";
import { useAppDispatch } from "../../../store/hooks";
import { Title } from "../../title/Title";
import { FavouriteIcon } from "../../../assets";
import { addFav } from "../../../store/slices/favSlice";

type BookDetailsProps = {
  book: GetBookDetailsApi;
};

export const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  const dispatch = useAppDispatch();
  const handleFav = (book: Book) => {
    dispatch(addFav(book));
  };
  const Cart = (book: GetBookDetailsApi) => {
    dispatch(addCart({ ...book, amount: 1 }));
  };
  return (
    <>
      <Title className={style.bookTitle}>{book.title}</Title>
      <div className={style.wrapperBook} key={book.isbn13}>
        <div className={style.containerPic}>
          <ButtonPrimary type="button" onClick={() => handleFav(book)}>
            <FavouriteIcon className={style.buttonFav} />
          </ButtonPrimary>
          <img className={style.pic} src={book.image} alt="" />
        </div>
        <div className={style.containerBook}>
          <div className={style.containerBookPrice}>
            <div className={style.bookPrice}>
              {book.price === "$0.00" ? "Not Available" : book.price}
            </div>
          </div>
          <div className={style.bookList}>
            <p className={style.nameField}>Authors</p>
            <div className={style.fieldValue}>{book.authors}</div>
            <p className={style.nameField}>Publisher</p>
            <div className={style.fieldValue}>{book.publisher}</div>
            <p className={style.nameField}>Year</p>
            <div className={style.fieldValue}>{book.year}</div>
            <p className={style.nameField}>Pages</p>
            <div className={style.fieldValue}>{book.pages}</div>
            <p className={style.nameField}>URL</p>
            <div className={style.fieldValue}>{book.url}</div>
          </div>
          <div className={style.containerButton}>
            <ButtonPrimary
              className={style.button}
              type="button"
              onClick={() => Cart(book)}
            >
              add to cart
            </ButtonPrimary>
          </div>
        </div>
      </div>
      <div className={style.containerDesc}>
        <h3 className={style.DescTitle}>Description</h3>
        <p className={style.DescText}>{book.desc}</p>
      </div>
    </>
  );
};
