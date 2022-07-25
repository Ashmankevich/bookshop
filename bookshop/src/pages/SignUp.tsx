import { Register } from "../features/auth/register/Register";
import { Template } from "../template/Template";

type SignUpProps = {};

export const SignUp: React.FC<SignUpProps> = () => {
  return (
    <div>
      <Template>
        <Register></Register>
      </Template>
    </div>
  );
};
