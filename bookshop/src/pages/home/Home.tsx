import style from "./Home.module.css";
import { Title } from "../../ui/title/Title";
import { Template } from "../../template/Template";
import { Subscribe } from "../../ui/subscribe/Subscribe";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBooks } from "../../store/selectors/bookSelectors";
import { fetchBook } from "../../store/slices/bookSlice";
import { BookListPage } from "../../features/books/book-list/BookListPage";

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
        <BookListPage books={books}></BookListPage>
        <Subscribe></Subscribe>
      </Template>
    </div>
  );
};
