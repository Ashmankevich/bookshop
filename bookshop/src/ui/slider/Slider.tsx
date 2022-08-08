import style from "./Slider.module.css";
import Slider from "react-slick";
import { Title } from "../title/Title";
import { Link } from "react-router-dom";
import { NewBookApi } from "../../store/types";

type CarouselProps = {
  books: NewBookApi[];
};

export const Carousel: React.FC<CarouselProps> = ({ books }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Title className={style.title}>Popular books</Title>
      <Slider {...settings}>
        {books.map((book) => {
          return (
            <div key={book.isbn13} className={style.SlideContainer}>
              <Link
                to={`/bookshop/detailed-book/${book.isbn13}`}
                className={style.StyledLink}
              >
                <div className={style.CustomSlide}>
                  <img src={book.image} alt={book.title} />
                  <div>
                    <Title className={style.SliderTitle}>{book.title}</Title>
                    <div className={style.SliderPrice}>
                      {book.price === "$0.00" ? "Not Available" : book.price}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
