import style from "./Subscribe.module.css";
import { ButtonPrimary } from "../button/button-primary/ButtonPrimary";
import { Input } from "../../ui/input/Input";
import { Title } from "../title/Title";

export const Subscribe: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.block}>
        <Title className={style.title}>subscribe to newsletter</Title>
        <p className={style.text}>
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </p>
        <form className={style.form}>
          <Input
            className={style.input}
            type="text"
            placeholder="Your email"
          ></Input>
          <ButtonPrimary className={style.button}>subscribe</ButtonPrimary>
        </form>
      </div>
    </div>
  );
};
