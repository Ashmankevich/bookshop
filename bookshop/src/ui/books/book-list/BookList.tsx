import style from "./BookList.module.css";
import { BookItem } from "../book-item/BookItem";
import { NewBookApi } from "../../../store/types";

type BookListProps = {
  books: NewBookApi[];
};

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className={style.wrapper}>
      {books.map((book) => (
        <BookItem key={book.isbn13} book={book} />
      ))}
    </div>
  );
};
