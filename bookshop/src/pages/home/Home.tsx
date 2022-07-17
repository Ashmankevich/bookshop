import style from "./Home.module.css";
import { Title } from "../../ui/title/Title";
import { Template } from "../../template/Template";
import { Subscribe } from "../../ui/subscribe/Subscribe";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBooks } from "../../store/selectors";
import { fetchBook } from "../../store/slices/bookSlice";
import { BookList } from "../../ui/books/book-list/BookList";

type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector(getBooks);
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);
  return (
    <div className={style.wrapper}>
      <Template>
        <Title className={style.title}>New Stuff</Title>
        <BookList books={books}></BookList>
        <Subscribe></Subscribe>
      </Template>
    </div>
  );
};
