import style from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Title className={style.title}>Popular books</Title>
      <Slider className={style.slider} {...settings}>
        {books.map((book) => {
          return (
            <div key={book.isbn13} className={style.wrapper}>
              <Link
                to={`/bookshop/detailed-book/${book.isbn13}`}
                className={style.link}
              >
                <div className={style.slide}>
                  <div className={style.wrapperPic}>
                    <img
                      className={style.bookPic}
                      src={book.image}
                      alt={book.title}
                    />
                  </div>

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
