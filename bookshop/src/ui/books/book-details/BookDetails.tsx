import style from "./BookDetails.module.css";
import { GetBookDetailsApi } from "../../../api/types";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { ArrowDownIcon } from "../../../assets";
import { ButtonPrimary } from "../../button/button-primary/ButtonPrimary";

type BookDetailsProps = {
  book: GetBookDetailsApi;
};

export const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  const previews = book.pdf ? Object.values(book.pdf) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <Link
              className={style.linkButton}
              to="details"
              duration={700}
              smooth={true}
            >
              More details
              <ArrowDownIcon></ArrowDownIcon>
            </Link>
            <ButtonPrimary className={style.button} type="button">
              add to cart
            </ButtonPrimary>
          </div>
          {previews.map((preview) => (
            <a className={style.buttonPreview} href={preview} key={book.isbn13}>
              Preview book
            </a>
          ))}
        </div>
      </div>
      <div className={style.bookListDetails}>
        <p className={style.nameField}>Authors</p>
        <div className={style.fieldValue}>{book.authors}</div>
        <p className={style.nameField}>ISBN10</p>
        <div className={style.fieldValue}>{book.isbn10}</div>
        <p className={style.nameField}>ISBN13</p>
        <div className={style.fieldValue}>{book.isbn13}</div>
        <p className={style.nameField}>Pages</p>
        <div className={style.fieldValue}>{book.pages}</div>
        <p className={style.nameField}>Publisher</p>
        <div className={style.fieldValue}>{book.publisher}</div>
      </div>
    </>
  );
};
