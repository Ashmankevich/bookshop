import { useState } from "react";
import { ButtonPrimary } from "../../ui/button/button-primary/ButtonPrimary";
import { Input } from "../../ui/input/Input";
import style from "./User.module.css";

export const User: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
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
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></Input>
        <Input
          className={style.input}
          label="Email"
          type="text"
          placeholder="Ashmankevich.a@gmail.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></Input>
      </div>
      <h3 className={style.title}>password</h3>
      <div className={style.groupPassword}>
        <Input
          className={style.input}
          label="Password"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></Input>
      </div>
      <div className={style.groupNewPassword}>
        <Input
          className={style.input}
          label="New password"
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        ></Input>
        <Input
          className={style.input}
          label="Confirm new password"
          type="password"
          placeholder="Confirm new password"
          value={confirmNewPassword}
          onChange={(event) => setConfirmNewPassword(event.target.value)}
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
