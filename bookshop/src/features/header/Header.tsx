import style from "./Header.module.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  FavouriteIcon,
  SearchIcon,
  ShoppingIcon,
  UserIcon,
} from "../../assets";
import { useAppSelector } from "../../store/hooks";
import { getCartInfo, getFav } from "../../store/selectors";
import { AppPages } from "../../router-routes/routes";
import { ButtonPrimary } from "../../ui/button/button-primary/ButtonPrimary";
import { ChangeEvent, useEffect, useState } from "react";
import { SearchBooksApi } from "../../store/types";
import { bookApi } from "../../api/bookApi";
import { Switcher } from "../../ui/switcher/Switcher";
import OutsideClickHandler from "react-outside-click-handler";
import { Toggle } from "../../ui/toggle/Toggle";

export const Header: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const { cart } = useAppSelector(getCartInfo);
  const { fav } = useAppSelector(getFav);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const onSubmit = (data: any) => {
    navigate(`/bookshop/search/${data.title}/1`);
    setTitle("");
  };

  const [searchResult, setSearchResult] = useState<SearchBooksApi>();

  useEffect(() => {
    bookApi.searchBooks(title, "1").then((books) => {
      setSearchResult(books);
    });
  }, [title]);

  return (
    <header className={style.wrapper}>
      <div className={style.logo}>
        <Link to={AppPages.HOME} className={style.link}>
          <p className={style.logoName}>bookshop</p>
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <input
          className={style.input}
          type="text"
          placeholder="Search"
          {...register("title", {
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value),
            required: true,
            minLength: 1,
            maxLength: 24,
            pattern: /^[A-Za-z]+$/i,
          })}
          value={title}
        ></input>
        <ButtonPrimary type="submit" className={style.button}>
          <SearchIcon></SearchIcon>
        </ButtonPrimary>
        <OutsideClickHandler
          onOutsideClick={() => {
            setTitle("");
          }}
        >
          {title.length > 0 && (
            <div className={style.row}>
              <div className={style.container}>
                <>
                  {searchResult?.books.map((book) => {
                    return (
                      <Link
                        className={style.link}
                        key={book.isbn13}
                        to={`/bookshop/detailed-book/${book.isbn13}`}
                        onClick={() => setTitle("")}
                      >
                        <li className={style.items}>
                          <img
                            className={style.img}
                            src={book.image}
                            alt={book.title}
                          />
                          <p className={style.text}>{book.title}</p>
                        </li>
                      </Link>
                    );
                  })}
                </>
              </div>
              <ButtonPrimary className={style.btn}>all results</ButtonPrimary>
            </div>
          )}
        </OutsideClickHandler>
      </form>

      <nav className={style.nav}>
        <Link to={AppPages.SHOPPING_CART}>
          <ShoppingIcon></ShoppingIcon>
          {cart.length !== 0 ? (
            <div className={style.notificationContainer}></div>
          ) : (
            <div></div>
          )}
        </Link>
        <Link to={AppPages.FAVOURITE}>
          <FavouriteIcon></FavouriteIcon>
          {fav.length !== 0 ? (
            <div className={style.notificationContainer}></div>
          ) : (
            <div></div>
          )}
        </Link>
        <Link to={AppPages.ACCOUNT}>
          <UserIcon></UserIcon>
        </Link>
      </nav>
      <Switcher />
      <Toggle onChange={undefined} />
    </header>
  );
};
