import { Link } from "react-router-dom";
import { AppPages } from "../../router-routes/routes";
import style from "./Logo.module.css";

type LogoProps = {};

export const Logo: React.FC<LogoProps> = () => {
  return (
    <>
      <div className={style.logo}>
        <Link to={AppPages.HOME} className={style.link}>
          <p className={style.logoName}>bookshop</p>
        </Link>
      </div>
    </>
  );
};
