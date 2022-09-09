import { useNavigate } from "react-router-dom";
import style from "./RegisterAuth.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../../store/slices/userSlice";
import { useAppDispatch } from "../../../store/hooks";
import { AppPages } from "../../../router-routes/routes";
import { useState } from "react";
import { FormAuth } from "../form-auth/FormAuth";

export const RegisterAuth = () => {
  const dispatch = useAppDispatch();
  const [isSignUpError, setIsSignUpError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate(AppPages.SIGN_IN);
      })
      .catch((error) => {
        setIsSignUpError(true);
      });
  };

  return (
    <>
      <FormAuth
        className={style.container}
        title="Sign Up"
        handleClick={handleRegister}
      />
      <div className={style.containerText}>
        {isSignUpError ? (
          <p className={style.text}>
            Wrong data... Please, check your email or password
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
