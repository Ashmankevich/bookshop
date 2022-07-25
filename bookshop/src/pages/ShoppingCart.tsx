import { Title } from "../ui/title/Title";
import { Template } from "../template/Template";
import { Navigate, useNavigate } from "react-router-dom";
import { BackIcon } from "../assets";
import { ButtonBack } from "../ui/button/button-back/ButtonBack";
import { Cart } from "../features/cart/Cart";
import { AppPages } from "../routes";
import { useAuth } from "../store/hooks";

type ShoppingCartProps = {};

export const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const navigate = useNavigate();
  const buttonBack = () => {
    navigate(-1);
  };
  const { isAuth } = useAuth();

  return isAuth ? (
    <>
      <Template>
        <ButtonBack onClick={buttonBack}>
          <BackIcon></BackIcon>
        </ButtonBack>
        <Title>
          <p
            style={{
              margin: "0",
              paddingTop: "10px",
            }}
          >
            Your Cart
          </p>
        </Title>
        <Cart></Cart>
      </Template>
    </>
  ) : (
    <Navigate to={AppPages.SIGN_IN} />
  );
};
