import { Title } from "../../ui/title/Title";
import { Navigate, useNavigate } from "react-router-dom";
import { ButtonBack } from "../../ui/button/button-back/ButtonBack";
import { Cart } from "../../features/cart/Cart";
import { AppPages } from "../../router-routes/routes";
import { useAppSelector, useAuth } from "../../store/hooks";
import style from "./ShoppingCart.module.css";
import { getBooks } from "../../store/selectors";
import { Carousel } from "../../ui/slider/Slider";

type ShoppingCartProps = {};

export const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const { books } = useAppSelector(getBooks);
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
      <Title className={style.title}>Your Cart</Title>
      <Cart></Cart>
      <Carousel books={books}></Carousel>
    </>
  ) : (
    <Navigate to={AppPages.SIGN_IN} />
  );
};
