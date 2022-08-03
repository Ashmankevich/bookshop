import { Title } from "../ui/title/Title";
import { Link, Navigate } from "react-router-dom";
import { AppPages } from "../router-routes/routes";
import { useAppDispatch } from "../store/hooks";
import { useAuth } from "../store/hooks";
import { removeUser } from "../store/slices/userSlice";

type AccountProps = {};

export const Account: React.FC<AccountProps> = () => {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <>
      <Title>Account</Title>
      <button
        style={{
          maxWidth: "350px",
          width: "100%",
          marginBottom: "50px",
          fontSize: "16px",
          border: "none",
          cursor: "pointer",
          padding: "14px",
          color: "white",
          backgroundColor: "#5b5a62",
        }}
        onClick={() => dispatch(removeUser())}
      >
        Log out from {email}
      </button>
      <Link
        style={{
          textDecoration: "none",
          cursor: "pointer",
          display: "block",
          marginBottom: "50px",
          fontSize: "16px",
          color: "#5b5a62",
        }}
        to={AppPages.HOME}
      >
        Jump to Main
      </Link>
    </>
  ) : (
    <Navigate to={AppPages.SIGN_IN} />
  );
};
