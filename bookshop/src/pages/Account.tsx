import { Title } from "../ui/title/Title";
import { Template } from "../template/Template";
import { Navigate } from "react-router-dom";
import { AppPages } from "../routes";
import { useAppDispatch } from "../store/hooks";
import { useAuth } from "../store/hooks";
import { removeUser } from "../store/slices/userTestSlice";

type AccountProps = {};

export const Account: React.FC<AccountProps> = () => {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <>
      <Template>
        <Title>Account</Title>
        <button onClick={() => dispatch(removeUser())}>
          Log out from {email}
        </button>
      </Template>
    </>
  ) : (
    <Navigate to={AppPages.SIGN_IN} />
  );
};
