import style from "./SignUpForm.module.css";
import { ButtonPrimary } from "../../../ui/button/button-primary/ButtonPrimary";
import { Link } from "react-router-dom";
import { AppPages } from "../../../routes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { setUser, setUserName } from "../../../store/slices/userSlice";
import { useAppDispatch } from "../../../store/hooks";

type SignUpFormProps = {};

export const SignUpForm: React.FC<SignUpFormProps> = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const [isSignUpError, setIsSignUpError] = useState(false);
  const onSubmit = (data: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user.email));
        dispatch(setUserName(data.name));
        navigate(AppPages.SIGN_IN);
      })
      .catch((error) => {
        setIsSignUpError(true);
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
        {isSignUpError ? (
          <p>Wrong data... Please, check your email or password</p>
        ) : (
          ""
        )}
        <ButtonPrimary className={style.button} type="submit">
          sign up
        </ButtonPrimary>
      </form>
    </div>
  );
};
