import { SignUpPage } from "../features/newForm/SignUp";
import { Template } from "../template/Template";

type SignUpProps = {};

export const SignUp: React.FC<SignUpProps> = () => {
  return (
    <div>
      <Template>
        <SignUpPage></SignUpPage>
      </Template>
    </div>
  );
};
