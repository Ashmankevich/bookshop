import { ButtonPrimary } from "../../ui/button/button-primary/ButtonPrimary";
import { Input } from "../../ui/input/Input";
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
        <Input
          className={style.input}
          label="Name"
          type="text"
          placeholder="Andrew Ashmankevich"
          value={""}
        ></Input>
        <Input
          className={style.input}
          label="Email"
          type="text"
          placeholder="Ashmankevich.a@gmail.com"
          value={""}
        ></Input>
      </div>
      <h3 className={style.title}>password</h3>
      <div className={style.groupPassword}>
        <Input
          className={style.input}
          label="Password"
          type="password"
          placeholder="Your password"
          value={""}
        ></Input>
      </div>
      <div className={style.groupNewPassword}>
        <Input
          className={style.input}
          label="New password"
          type="password"
          placeholder="New password"
          value={""}
        ></Input>
        <Input
          className={style.input}
          label="Confirm new password"
          type="password"
          placeholder="Confirm new password"
          value={""}
        ></Input>
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
