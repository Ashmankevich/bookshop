import style from "./Account.module.css";
import { Title } from "../../ui/title/Title";
import { Template } from "../../template/Template";
import { User } from "../../features/user/User";
import { BackIcon } from "../../assets";
import { useNavigate } from "react-router-dom";
import { ButtonBack } from "../../ui/button/button-back/ButtonBack";

type AccountProps = {};

export const Account: React.FC<AccountProps> = () => {
  const navigate = useNavigate();
  const buttonBack = () => {
    navigate(-1);
  };

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
};
