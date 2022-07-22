import style from "./SignInForm.module.css";
import { ButtonPrimary } from "../../../ui/button/button-primary/ButtonPrimary";
import { Input } from "../../../ui/input/Input";
import { Link } from "react-router-dom";
import { AppPages } from "../../../types";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  setUser,
  setUserName,
  setPassword,
} from "../../../store/slices/userSlice";
import { useAppDispatch } from "../../../store/hooks";

type SignInFormProps = {};

export const SignInForm: React.FC<SignInFormProps> = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const [isSignInError, setIsSignInError] = useState(false);
  const onSubmit = ({ email, password, name }: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user.email));
        dispatch(setUserName(name));
        dispatch(setPassword(password));
        navigate(AppPages.ACCOUNT);
      })
      .catch((error) => {
        setIsSignInError(true);
      });
  };
  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
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
          {...register("email")}
          type="text"
          placeholder="Your email"
        ></Input>
        <Input
          className={style.input}
          label="Password"
          {...register("password")}
          type="text"
          placeholder="Your password"
        ></Input>
        <p className={style.text}>Forgot password ?</p>
        {isSignInError ? (
          <p>Wrong data... Please, check your email or password</p>
        ) : (
          ""
        )}
        <ButtonPrimary className={style.button} type="submit">
          sign in
        </ButtonPrimary>
      </form>
    </div>
  );
};
