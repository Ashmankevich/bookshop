import style from "./Slider.module.css";
import Slider from "react-slick";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBooks } from "../../store/selectors";
import { fetchBook } from "../../store/slices/bookSlice";
import { Title } from "../title/Title";
import { Link } from "react-router-dom";

type CarouselProps = {};

export const Carousel: React.FC<CarouselProps> = () => {
  const { books } = useAppSelector(getBooks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Title className={style.title}>Popolar books</Title>
      <Slider {...settings}>
        {books.map((book) => {
          return (
            <div key={book.isbn13} className={style.wrapper}>
              <Link
                to={`/bookshop/detailed-book/${book.isbn13}`}
                className={style.link}
              >
                <div className={style.container}>
                  <img src={book.image} alt={book.title} />
                  <div className={style.row}>
                    <Title className={style.bookTitle}>{book.title}</Title>
                    <div className={style.price}>
                      {book.price === "$0.00" ? "Not Available" : book.price}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
