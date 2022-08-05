import { RegisterAuth } from "../../features/auth/register-auth/RegisterAuth";

type SignUpProps = {};

export const SignUp: React.FC<SignUpProps> = () => {
  return (
    <>
      <RegisterAuth></RegisterAuth>
    </>
  );
};
