import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import style from "./LoginAuth.module.css";
import { setUser } from "../../../store/slices/userSlice";
import { useAppDispatch } from "../../../store/hooks";
import { AppPages } from "../../../router-routes/routes";
import { useNavigate } from "react-router-dom";
import { FormAuth } from "../form-auth/FormAuth";
import { useState } from "react";

export const LoginAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isSignInError, setIsSignInError] = useState(false);
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate(AppPages.ACCOUNT);
      })
      .catch((error) => {
        setIsSignInError(true);
      });
  };

  return (
    <div className={style.wrapper}>
      <FormAuth title="Sign In" handleClick={handleLogin} />
      <div className={style.containerText}>
        {isSignInError ? (
          <p className={style.text}>
            Something was wrong... Please, check your email or password
          </p>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};
