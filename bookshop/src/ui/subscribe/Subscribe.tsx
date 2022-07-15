import style from "./Subscribe.module.css";
import { Button } from "../../ui/button/Button";
import { Input } from "../../ui/input/Input";
import { Title } from "../title/Title";

export const Subscribe: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.block}>
        <Title className={style.title}>SUBSCRIBE TO NEWSLETTER</Title>
        <p className={style.text}>
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </p>
        <form className={style.form}>
          <Input
            className={style.input}
            type="text"
            placeholder="Your email"
            onChange={undefined}
          ></Input>
          <Button className={style.button}>SUBSCRIBE</Button>
        </form>
      </div>
    </div>
  );
};
