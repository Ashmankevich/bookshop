import { Title } from "../ui/title/Title";
import { Template } from "../template/Template";
import { Navigate, useNavigate } from "react-router-dom";
import { BackIcon } from "../assets";
import { ButtonBack } from "../ui/button/button-back/ButtonBack";
import { Cart } from "../features/cart/Cart";
import { AppPages } from "../routes";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type ShoppingCartProps = {};

export const ShoppingCart: React.FC<ShoppingCartProps> = () => {
  const navigate = useNavigate();
  const buttonBack = () => {
    navigate(-1);
  };

  const { isSignIn } = useSelector(({ user }: RootState) => user);
  if (isSignIn) {
    return (
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
    );
  }
  return <Navigate to={AppPages.SIGN_IN} />;
};
