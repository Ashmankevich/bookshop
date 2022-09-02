import style from "./Header.module.css";
import { Toggle } from "../../ui/toggle/Toggle";
import { Navigation } from "../navigation/Navigation";
import { SearchOnMain } from "../search/SearchOnMain/SearchOnMain";
import { Logo } from "../../ui/logo/Logo";

export const Header: React.FC = () => {
  return (
    <header className={style.wrapper}>
      <Logo />
      <SearchOnMain></SearchOnMain>
      <Navigation />
      <Toggle />
    </header>
  );
};
