import { Login } from "../features/auth/login/Login";
import { Template } from "../template/Template";

type SignInProps = {};

export const SignIn: React.FC<SignInProps> = () => {
  return (
    <div>
      <Template>
        <Login />
      </Template>
    </div>
  );
};