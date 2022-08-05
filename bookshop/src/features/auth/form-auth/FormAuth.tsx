import { useState } from "react";
import { Link } from "react-router-dom";
import { AppPages } from "../../../router-routes/routes";
import { ButtonPrimary } from "../../../ui/button/button-primary/ButtonPrimary";
import style from "./FormAuth.module.css";

type FormAuthProps = {
  className?: string;
  title: string;
  handleClick: (email: string, password: string) => void;
};

export const FormAuth: React.FC<FormAuthProps> = ({
  title,
  handleClick,
  className = "",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={`${style.form} ${className}`}>
      <nav className={style.nav}>
        <Link to={AppPages.SIGN_IN} className={style.login}>
          sign in
        </Link>
        <Link to={AppPages.SIGN_UP} className={style.register}>
          sign up
        </Link>
      </nav>
      <label className={style.label}>
        Email
        <input
          className={style.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </label>
      <label className={style.label}>
        Password
        <input
          className={style.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </label>
      <ButtonPrimary
        className={style.button}
        onClick={() => handleClick(email, password)}
      >
        {title}
      </ButtonPrimary>
    </div>
  );
};
