import { Title } from "../ui/title/Title";
import { Subscribe } from "../ui/subscribe/Subscribe";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getBooks, getStatus } from "../store/selectors";
import { fetchBook } from "../store/slices/bookSlice";
import { BookList } from "../ui/books/book-list/BookList";
import { Spinner } from "../ui/spinner/Spinner";

type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector(getBooks);
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  const status = useAppSelector(getStatus);
  if (status === "loading") {
    return <Spinner></Spinner>;
  }

  if (status === "error") {
    return <Title>Oops, smth was wrong...</Title>;
  }

  return (
    <>
      <Title>New Stuff</Title>
      <BookList books={books}></BookList>
      <Subscribe></Subscribe>
    </>
  );
};
