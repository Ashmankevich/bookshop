import style from "./SignIn.module.css";
import { Template } from "../../template/Template";
import { ButtonPrimary } from "../../ui/button/button-primary/ButtonPrimary";
import { Input } from "../../ui/input/Input";
import { Link } from "react-router-dom";
import { AppPages } from "../../types";

type SignInProps = {};

export const SignIn: React.FC<SignInProps> = () => {
  return (
    <div className={style.wrapper}>
      <Template>
        <form className={style.form}>
          <nav className={style.nav}>
            <Link to={AppPages.SIGN_IN} className={style.login}>
              sign in
            </Link>
            <Link to={AppPages.SIGN_UP} className={style.register}>
              sign up
            </Link>
          </nav>
          <Input
            className={style.input}
            label="Email"
            onChange={undefined}
            type="text"
            placeholder="Your email"
          ></Input>
          <Input
            className={style.input}
            label="Password"
            onChange={undefined}
            type="text"
            placeholder="Your password"
          ></Input>
          <p className={style.text}>Forgot password ?</p>
          <ButtonPrimary className={style.button} type="submit">
            sign in
          </ButtonPrimary>
        </form>
      </Template>
    </div>
  );
};
