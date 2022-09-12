import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../../ui/button/button-primary/ButtonPrimary";
import { useForm } from "react-hook-form";
import { bookApi } from "../../../api/bookApi";
import { SearchBooksApi } from "../../../store/types";
import OutsideClickHandler from "react-outside-click-handler";
import style from "./SearchOnMain.module.css";

type SearchProps = {
  className?: string;
};

export const SearchOnMain: React.FC<SearchProps> = () => {
  const { register, handleSubmit } = useForm();
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
    <>
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
          <div className={style.circle}></div>
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
              <button className={style.btn}>all results</button>
            </div>
          )}
        </OutsideClickHandler>
      </form>
    </>
  );
};
