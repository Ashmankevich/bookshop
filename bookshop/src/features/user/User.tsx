import { ButtonPrimary } from "../../ui/button/button-primary/ButtonPrimary";
import style from "./User.module.css";

export const User: React.FC = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={style.form}
    >
      <h3 className={style.title}>profile</h3>
      <div className={style.groupProfile}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            placeholder="Andrew Ashmankevich"
          ></input>
        </label>
        <label className={style.label}>
          Email
          <input
            className={style.input}
            type="text"
            placeholder="Ashmankevich.a@gmail.com"
          ></input>
        </label>
      </div>
      <h3 className={style.title}>password</h3>
      <div className={style.groupPassword}>
        <label className={style.label}>
          Password
          <input
            className={style.input}
            type="password"
            placeholder="Password"
          ></input>
        </label>
      </div>
      <div className={style.groupNewPassword}>
        <label className={style.label}>
          New password
          <input
            className={style.input}
            type="password"
            placeholder="New password"
          ></input>
        </label>
        <label className={style.label}>
          Confirm new password
          <input
            className={style.input}
            type="password"
            placeholder="Confirm new password"
          ></input>
        </label>
      </div>
      <div className={style.line}></div>
      <div className={style.button}>
        <ButtonPrimary type="submit" className={style.buttonSaveChanges}>
          save changes
        </ButtonPrimary>
        <ButtonPrimary type="submit" className={style.buttonCancel}>
          cancel
        </ButtonPrimary>
      </div>
    </form>
  );
};
