import { Title } from "../../ui/title/Title";
import { Link, Navigate } from "react-router-dom";
import { AppPages } from "../../router-routes/routes";
import { useAppDispatch } from "../../store/hooks";
import { useAuth } from "../../store/hooks";
import { removeUser } from "../../store/slices/userSlice";
import { ButtonPrimary } from "../../ui/button/button-primary/ButtonPrimary";
import style from "./Account.module.css";

type AccountProps = {};

export const Account: React.FC<AccountProps> = () => {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <>
      <Title>Account</Title>
      <div className={style.wrapper}>
        <ButtonPrimary
          className={style.button}
          onClick={() => dispatch(removeUser())}
        >
          Log out from {email}
        </ButtonPrimary>
        <Link className={style.link} to={AppPages.HOME}>
          jump to main
        </Link>
      </div>
    </>
  ) : (
    <Navigate to={AppPages.SIGN_IN} />
  );
};
