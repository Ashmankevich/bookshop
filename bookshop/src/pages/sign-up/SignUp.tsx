import { SignUpForm } from "../../features/form/sign-up-form/SignUpForm";
import { Template } from "../../template/Template";

type SignUpProps = {};

export const SignUp: React.FC<SignUpProps> = () => {
  return (
    <div>
      <Template>
        <SignUpForm></SignUpForm>
      </Template>
    </div>
  );
};
