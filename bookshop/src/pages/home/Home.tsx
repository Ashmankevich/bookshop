import style from "./Home.module.css";
import { Title } from "../../ui/title/Title";
import { Template } from "../../template/Template";

type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className={style.wrapper}>
      <Template>
        <Title>New Stuff</Title>
      </Template>
    </div>
  );
};
