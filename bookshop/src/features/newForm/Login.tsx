import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { setUser } from "../../store/slices/userTestSlice";
import { useAppDispatch } from "../../store/hooks";
import { AppPages } from "../../routes";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "./FormLogin";

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
      .catch(() => alert("Invalid user!"));
  };

  return <FormLogin title="SignInPage" handleClick={handleLogin} />;
};
