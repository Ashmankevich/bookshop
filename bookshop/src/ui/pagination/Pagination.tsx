import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { getBooks } from "../../store/selectors";
import { ButtonPrimary } from "../button/button-primary/ButtonPrimary";
import style from "./Pagination.module.css";

type PaginationProps = {};

export const Pagination: React.FC<PaginationProps> = () => {
  const { title = "", page = "" } = useParams();
  const { total } = useAppSelector(getBooks);
  const navigate = useNavigate();

  const handleNextButton = () => {
    navigate(`/bookshop/search/${title}/${Number(page) + 1}`);
    window.scrollTo(0, 0);
  };

  const handlePrevButton = () => {
    if (+page > 1) {
      navigate(`/bookshop/search/${title}/${Number(page) - 1}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.pages}>
        <ButtonPrimary
          onClick={handlePrevButton}
          className={style.btnToRightPage}
        >
          {+page > 1 ? +page - 1 : ""}
        </ButtonPrimary>
        <ButtonPrimary className={style.btnCurrentPage}>{page}</ButtonPrimary>
        <ButtonPrimary
          onClick={handleNextButton}
          className={style.btnToRightPage}
        >
          {total && +page < Math.ceil(+total) / 10 ? +page + 1 : +page + 1}
        </ButtonPrimary>
      </div>
    </div>
  );
};
