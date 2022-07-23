import style from "./ShoppingCart.module.css";
import { Title } from "../ui/title/Title";
import { Template } from "../template/Template";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../assets";
import { ButtonBack } from "../ui/button/button-back/ButtonBack";
import { Cart } from "../features/cart/Cart";

type ShoppingCartProps = {};

export const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const navigate = useNavigate();
  const buttonBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Template>
        <ButtonBack className={style.buttonBack} onClick={buttonBack}>
          <BackIcon></BackIcon>
        </ButtonBack>
        <Title className={style.title}>Your Cart</Title>
        <Cart></Cart>
      </Template>
    </>
  );
};
