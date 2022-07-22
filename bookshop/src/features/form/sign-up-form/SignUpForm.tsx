import style from "./SignUpForm.module.css";
import { ButtonPrimary } from "../../../ui/button/button-primary/ButtonPrimary";
import { Input } from "../../../ui/input/Input";
import { Link } from "react-router-dom";
import { AppPages } from "../../../types";
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
        <Input
          className={style.input}
          label="Name"
          {...register("name")}
          type="text"
          placeholder="Your name"
        ></Input>
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
