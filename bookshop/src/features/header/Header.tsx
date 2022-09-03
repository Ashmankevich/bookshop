import style from "./Header.module.css";
import { Navigation } from "../navigation/Navigation";
import { Toggle } from "../../ui/toggle/Toggle";
import { Logo } from "../../ui/logo/Logo";
import { SearchOnMain } from "../search/searchOnMain/SearchOnMain";

export const Header: React.FC = () => {
  return (
    <header className={style.wrapper}>
      <Logo />
      <SearchOnMain />
      <Navigation />
      <Toggle />
    </header>
  );
};
