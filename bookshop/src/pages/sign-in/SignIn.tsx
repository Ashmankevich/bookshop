import { LoginAuth } from "../../features/auth/login-auth/LoginAuth";

type SignInProps = {};

export const SignIn: React.FC<SignInProps> = () => {
  return (
    <>
      <LoginAuth />
    </>
  );
};
