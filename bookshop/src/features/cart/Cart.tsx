import style from "./Cart.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteCart,
  addAmount,
  removeAmount,
} from "../../store/slices/cartSlice";
import { BookCartApi } from "../../store/types";
import { getCartInfo } from "../../store/selectors";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../ui/button/button-primary/ButtonPrimary";

type CartProps = {};

export const Cart: React.FC<CartProps> = () => {
  const { cart } = useAppSelector(getCartInfo);

  const dispatch = useAppDispatch();
  const DeleteCart = (book: any) => {
    dispatch(deleteCart(book));
  };
  const AddItem = (book: BookCartApi) => {
    dispatch(addAmount(book));
  };

  const RemoveItem = (book: BookCartApi) => {
    if (book.amount > 1) {
      dispatch(removeAmount(book));
    }
  };
  const [total, setTotal] = useState(0.0);
  useEffect(() => {
    let totalAmount = 0.0;
    cart.forEach((book) => {
      totalAmount += Number(+book.amount) * +book.price.slice(1);
    });
    setTotal(totalAmount);
  }, [cart]);
  return (
    <>
      <div className={style.cartList}>
        {cart.map((book: BookCartApi) => {
          return (
            <div className={style.wrapper} key={book.isbn13}>
              <div className={style.container}>
                <Link
                  className={style.link}
                  to={`/bookshop/detailed-book/${book.isbn13}`}
                >
                  <img
                    className={style.pic}
                    src={book.image}
                    alt={book.title}
                  />
                </Link>
                <div className={style.containerDescription}>
                  <p className={style.title}>{book.title}</p>
                  <p className={style.subTitle}>
                    {book.publisher}, {book.year}
                  </p>
                  <div className={style.containerAmount}>
                    <ButtonPrimary
                      className={style.button}
                      onClick={() => RemoveItem(book)}
                    >
                      <div className={style.btnRemove} />
                    </ButtonPrimary>
                    <p className={style.amount}>{book.amount}</p>
                    <ButtonPrimary
                      className={style.button}
                      onClick={() => AddItem(book)}
                    >
                      <div className={style.btnAddItem} />
                    </ButtonPrimary>
                  </div>
                </div>
                <p className={style.price}>
                  {book.price === "$0.00"
                    ? "Not Available"
                    : `$${(Number(book.price.slice(1)) * book.amount).toFixed(
                        2
                      )}`}
                </p>
                <ButtonPrimary className={style.buttonDelete}>
                  <span
                    className={style.btnDelete}
                    onClick={() => DeleteCart(book)}
                  />
                </ButtonPrimary>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.containerTotalPrice}>
        <div className={style.totalPrice}>Total: ${+total.toFixed(2)} </div>
      </div>
    </>
  );
};
