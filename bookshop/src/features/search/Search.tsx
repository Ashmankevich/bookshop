import style from "./Search.module.css";
import { Title } from "../../ui/title/Title";
import { Template } from "../../template/Template";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBooks, getStatus } from "../../store/selectors";
import { BookList } from "../../ui/books/book-list/BookList";
import { useParams } from "react-router-dom";
import { fetchSearchBooks } from "../../store/slices/bookSlice";
import { Spinner } from "../../ui/spinner/Spinner";

type SearchProps = {};

export const Search: React.FC<SearchProps> = () => {
  const { title = " ", page = " " } = useParams();
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
      <Template>
        <Title className={style.title}>"{title}" : search result</Title>
        <BookList books={books ? books : []}></BookList>
      </Template>
    </div>
  );
};
