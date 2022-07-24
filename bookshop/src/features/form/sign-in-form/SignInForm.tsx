import style from "./SignInForm.module.css";
import { ButtonPrimary } from "../../../ui/button/button-primary/ButtonPrimary";
import { Link } from "react-router-dom";
import { AppPages } from "../../../routes";
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
        <label className={style.label}>
          Name
          <input
            className={style.input}
            {...register("name")}
            type="text"
            placeholder="Your name"
          ></input>
        </label>
        <label className={style.label}>
          Email
          <input
            className={style.input}
            {...register("email")}
            type="text"
            placeholder="Your email"
          ></input>
        </label>
        <label className={style.label}>
          Password
          <input
            className={style.input}
            {...register("password")}
            type="password"
            placeholder="Your password"
          ></input>
        </label>
        {isSignInError ? (
          <p>Something was wrong... Please, check your email or password</p>
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
