import style from "./Home.module.css";
import { Title } from "../../ui/title/Title";
import { Template } from "../../template/Template";
import { Subscribe } from "../../ui/subscribe/Subscribe";

type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className={style.wrapper}>
      <Template>
        <Title className={style.title}>New Stuff</Title>
        <Subscribe></Subscribe>
      </Template>
    </div>
  );
};
