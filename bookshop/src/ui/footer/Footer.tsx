import style from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>©2022 Bookshop</p>
      <p className={style.text}>All rights reserved</p>
    </div>
  );
};
