import style from "./BookListPage.module.css";
import { NewBookApi } from "../../../api/types";
import { BookItemPage } from "../book-item/BookItemPage";

type BookListProps = {
  books: NewBookApi[];
};

export const BookListPage: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className={style.wrapper}>
      {books.map((book) => (
        <BookItemPage key={book.isbn13} book={book} />
      ))}
    </div>
  );
};
