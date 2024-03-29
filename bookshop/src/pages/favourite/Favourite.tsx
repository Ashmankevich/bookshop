import style from "./Favourite.module.css";
import { Title } from "../../ui/title/Title";
import { Navigate, useNavigate } from "react-router-dom";
import { ButtonBack } from "../../ui/button/button-back/ButtonBack";
import { AppPages } from "../../router-routes/routes";
import { useAuth } from "../../store/hooks";
import { FavouriteList } from "../../features/favouriteList/FavouriteList";

type FavouriteProps = {};

export const Favourite: React.FC<FavouriteProps> = () => {
  const navigate = useNavigate();
  const buttonBack = () => {
    navigate(-1);
  };
  const { isAuth } = useAuth();

  return isAuth ? (
    <>
      <ButtonBack
        className={style.buttonBack}
        onClick={buttonBack}
      ></ButtonBack>
      <Title className={style.title}>Your Favourite List</Title>
      <FavouriteList></FavouriteList>
    </>
  ) : (
    <Navigate to={AppPages.SIGN_IN} />
  );
};
