import style from "./BookList.module.css";
import { NewBookApi } from "../../../api/types";
import { BookItem } from "../book-item/BookItem";

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
