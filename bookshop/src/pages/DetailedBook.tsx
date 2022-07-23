import { Template } from "../template/Template";
import { Subscribe } from "../ui/subscribe/Subscribe";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getBooks } from "../store/selectors";
import { fetchBookDetails } from "../store/slices/bookSlice";
import { BookDetails } from "../ui/books/book-details/BookDetails";
import { ButtonBack } from "../ui/button/button-back/ButtonBack";
import { useNavigate, useParams } from "react-router-dom";
import { BackIcon } from "../assets";

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
  return (
    <>
      <Template>
        <ButtonBack onClick={buttonBack}>
          <BackIcon></BackIcon>
        </ButtonBack>
        <BookDetails book={result}></BookDetails>
        <Subscribe></Subscribe>
      </Template>
    </>
  );
};
