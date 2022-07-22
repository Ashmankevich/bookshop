import style from "./Account.module.css";
import { Title } from "../../ui/title/Title";
import { Template } from "../../template/Template";
import { User } from "../../features/user/User";
import { BackIcon } from "../../assets";
import { Navigate, useNavigate } from "react-router-dom";
import { ButtonBack } from "../../ui/button/button-back/ButtonBack";
import { AppPages } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type AccountProps = {};

export const Account: React.FC<AccountProps> = () => {
  const { isSignIn } = useSelector(({ user }: RootState) => user);
  const navigate = useNavigate();
  const buttonBack = () => {
    navigate(-1);
  };
  if (isSignIn) {
    return (
      <div className={style.wrapper}>
        <Template>
          <ButtonBack className={style.buttonBack} onClick={buttonBack}>
            <BackIcon></BackIcon>
          </ButtonBack>
          <Title className={style.title}>Account</Title>
          <User></User>
        </Template>
      </div>
    );
  }
  return <Navigate to={AppPages.SIGN_IN} />;
};
