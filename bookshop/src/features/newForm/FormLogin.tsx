import { useState } from "react";
import { Link } from "react-router-dom";
import { AppPages } from "../../routes";
import { ButtonPrimary } from "../../ui/button/button-primary/ButtonPrimary";
import style from "./FormLogin.module.css";

type FormProps = {
  title: string;
  handleClick: (email: string, pass: string) => void;
};

export const FormLogin: React.FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className={style.form}>
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
          placeholder="email"
        />
      </label>
      <label className={style.label}>
        Password
        <input
          className={style.input}
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
      </label>
      <ButtonPrimary
        className={style.button}
        onClick={() => handleClick(email, pass)}
      >
        {title}
      </ButtonPrimary>
    </div>
  );
};
