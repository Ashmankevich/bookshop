import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FormRegister } from "../form-register/FormRegister";
import { setUser } from "../../../store/slices/userSlice";
import { useAppDispatch } from "../../../store/hooks";
import { AppPages } from "../../../routes";
import { useState } from "react";

export const Register = () => {
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
    <div className={style.wrapper}>
      <FormRegister title="Sign Up" handleClick={handleRegister} />
      <div className={style.containerText}>
        {isSignUpError ? (
          <p>Wrong data... Please, check your email or password</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
