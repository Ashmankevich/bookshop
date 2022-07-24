import { ButtonPrimary } from "../../ui/button/button-primary/ButtonPrimary";
import style from "./User.module.css";

export const User: React.FC = () => {
  return (
    <>
      <div className={style.line}></div>
      <div className={style.button}>
        <ButtonPrimary type="submit" className={style.buttonSaveChanges}>
          LOG OUT
        </ButtonPrimary>
      </div>
    </>
  );
};
