import { Subscribe } from "../ui/subscribe/Subscribe";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getBooks, getStatus } from "../store/selectors";
import { fetchBookDetails } from "../store/slices/bookSlice";
import { BookDetails } from "../ui/books/book-details/BookDetails";
import { ButtonBack } from "../ui/button/button-back/ButtonBack";
import { useNavigate, useParams } from "react-router-dom";
import { BackIcon } from "../assets";
import { Spinner } from "../ui/spinner/Spinner";
import { Title } from "../ui/title/Title";

type DetailedBookProps = {};

export const DetailedBook: React.FC<DetailedBookProps> = () => {
  const { id = "" } = useParams();
  const { result } = useAppSelector(getBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [id, dispatch]);

  const navigate = useNavigate();

  const buttonBack = () => {
    navigate(-1);
  };

  const status = useAppSelector(getStatus);
  if (status === "loading") {
    return <Spinner></Spinner>;
  }

  if (status === "error") {
    return <Title>Oops, smth was wrong...</Title>;
  }

  return (
    <>
      <ButtonBack onClick={buttonBack}>
        <BackIcon></BackIcon>
      </ButtonBack>
      <BookDetails book={result}></BookDetails>
      <Subscribe></Subscribe>
    </>
  );
};
