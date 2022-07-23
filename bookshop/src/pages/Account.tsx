import { Title } from "../ui/title/Title";
import { Template } from "../template/Template";
import { User } from "../features/user/User";
import { BackIcon } from "../assets";
import { Navigate, useNavigate } from "react-router-dom";
import { ButtonBack } from "../ui/button/button-back/ButtonBack";
import { AppPages } from "../routes";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type AccountProps = {};

export const Account: React.FC<AccountProps> = () => {
  const { isSignIn } = useSelector(({ user }: RootState) => user);
  const navigate = useNavigate();
  const buttonBack = () => {
    navigate(-1);
  };
  if (isSignIn) {
    return (
      <>
        <Template>
          <ButtonBack onClick={buttonBack}>
            <BackIcon></BackIcon>
          </ButtonBack>
          <Title>Account</Title>
          <User></User>
        </Template>
      </>
    );
  }
  return <Navigate to={AppPages.SIGN_IN} />;
};
