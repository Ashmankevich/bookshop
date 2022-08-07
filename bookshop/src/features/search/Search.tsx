import style from "./Search.module.css";
import { Title } from "../../ui/title/Title";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBooks, getStatus } from "../../store/selectors";
import { BookList } from "../../ui/books/book-list/BookList";
import { useParams } from "react-router-dom";
import { fetchSearchBooks } from "../../store/slices/bookSlice";
import { Spinner } from "../../ui/spinner/Spinner";
import { Pagination } from "../../ui/pagination/Pagination";
import { SearchBooksApi } from "../../store/types";
import { bookApi } from "../../api/bookApi";

type SearchProps = {};

export const Search: React.FC<SearchProps> = () => {
  const { title = " ", page = " " } = useParams();

  const [searchResult, setSearchResult] = useState<SearchBooksApi>();
  useEffect(() => {
    bookApi.searchBooks(title, page).then((books) => {
      setSearchResult(books);
    });
  }, [title, page]);

  const { books } = useAppSelector(getBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSearchBooks({ title, page }));
  }, [title, dispatch, page]);

  const status = useAppSelector(getStatus);
  if (status === "loading") {
    return <Spinner></Spinner>;
  }

  if (status === "error") {
    return <Title>Oops, smth was wrong...</Title>;
  }

  return (
    <div className={style.wrapper}>
      <Title className={style.title}>
        You search "{title}" found {searchResult?.total} books
      </Title>
      <BookList books={books ? books : []}></BookList>
      <Pagination></Pagination>
    </div>
  );
};
