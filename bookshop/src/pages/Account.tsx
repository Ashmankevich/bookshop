import { Title } from "../ui/title/Title";
import { Template } from "../template/Template";
import { User } from "../features/user/User";
import { Navigate } from "react-router-dom";
import { AppPages } from "../routes";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type AccountProps = {};

export const Account: React.FC<AccountProps> = () => {
  const { isSignIn } = useSelector(({ user }: RootState) => user);
  if (isSignIn) {
    return (
      <>
        <Template>
          <Title>Account</Title>
          <User></User>
        </Template>
      </>
    );
  }
  return <Navigate to={AppPages.SIGN_IN} />;
};
