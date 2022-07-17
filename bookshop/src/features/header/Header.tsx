import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LikeIcon,
  LogoIcon,
  SearchIcon,
  ShoppingIcon,
  UserIcon,
} from "../../assets";
import { AppPages } from "../../types";
import { ButtonPrimary } from "../../ui/button/button-primary/ButtonPrimary";
import { Input } from "../../ui/input/Input";
import style from "./Header.module.css";

export const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  return (
    <header className={style.wrapper}>
      <div className={style.logo}>
        <Link to={AppPages.HOME}>
          <LogoIcon></LogoIcon>
        </Link>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={style.form}
      >
        <Input
          className={style.input}
          type="text"
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></Input>
        <ButtonPrimary type="submit" className={style.button}>
          <SearchIcon></SearchIcon>
        </ButtonPrimary>
      </form>
      <nav className={style.nav}>
        <Link to={AppPages.FAVOURITE_BOOKS}>
          <LikeIcon></LikeIcon>
        </Link>
        <Link to={AppPages.SHOPPING_CART}>
          <ShoppingIcon></ShoppingIcon>
        </Link>
        <Link to={AppPages.ACCOUNT}>
          <UserIcon></UserIcon>
        </Link>
      </nav>
    </header>
  );
};
