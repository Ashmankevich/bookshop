import style from "./BookDetails.module.css";
import { ButtonPrimary } from "../../button/button-primary/ButtonPrimary";
import { GetBookDetailsApi } from "../../../store/types";

type BookDetailsProps = {
  book: GetBookDetailsApi;
};

export const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <>
      <div className={style.wrapperBook} key={book.isbn13}>
        <div className={style.containerPic}>
          <img className={style.pic} src={book.image} alt={book.title} />
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
            <p className={style.nameField}>Pages</p>
            <div className={style.fieldValue}>{book.pages}</div>
            <p className={style.nameField}>Year</p>
            <div className={style.fieldValue}>{book.year}</div>
          </div>
          <div className={style.containerButton}>
            <ButtonPrimary className={style.button} type="button">
              add to cart
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </>
  );
};
