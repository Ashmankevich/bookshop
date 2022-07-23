import { SignInForm } from "../features/form/sign-in-form/SignInForm";
import { Template } from "../template/Template";

type SignInProps = {};

export const SignIn: React.FC<SignInProps> = () => {
  return (
    <div>
      <Template>
        <SignInForm></SignInForm>
      </Template>
    </div>
  );
};
