import { Title } from "../../ui/title/Title";
import { Navigate, useNavigate } from "react-router-dom";
import { BackIcon } from "../../assets";
import { ButtonBack } from "../../ui/button/button-back/ButtonBack";
import { Cart } from "../../features/cart/Cart";
import { AppPages } from "../../router-routes/routes";
import { useAuth } from "../../store/hooks";
import style from "./ShoppingCart.module.css";

type ShoppingCartProps = {};

export const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const navigate = useNavigate();
  const buttonBack = () => {
    navigate(-1);
  };
  const { isAuth } = useAuth();

  return isAuth ? (
    <>
      <ButtonBack onClick={buttonBack}>
        <BackIcon></BackIcon>
      </ButtonBack>
      <Title className={style.title}>Your Cart</Title>
      <Cart></Cart>
    </>
  ) : (
    <Navigate to={AppPages.SIGN_IN} />
  );
};
