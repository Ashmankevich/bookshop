import { Link } from "react-router-dom";
import { ShoppingIcon, FavouriteIcon, UserIcon } from "../../assets";
import { AppPages } from "../../router-routes/routes";
import { useAppSelector } from "../../store/hooks";
import { getCartInfo, getFav } from "../../store/selectors";
import style from "./Navigation.module.css";

type NavProps = {
  className?: string;
};

export const Navigation: React.FC<NavProps> = () => {
  const { cart } = useAppSelector(getCartInfo);
  const { fav } = useAppSelector(getFav);
  return (
    <>
      <nav className={style.nav}>
        <Link to={AppPages.SHOPPING_CART}>
          <ShoppingIcon className={style.shoppingIcon}></ShoppingIcon>
          {cart.length !== 0 ? (
            <div className={style.notificationContainer}></div>
          ) : (
            <div></div>
          )}
        </Link>
        <Link to={AppPages.FAVOURITE}>
          <FavouriteIcon className={style.favouriteIcon}></FavouriteIcon>
          {fav.length !== 0 ? (
            <div className={style.notificationContainer}></div>
          ) : (
            <div></div>
          )}
        </Link>
        <Link to={AppPages.ACCOUNT}>
          <UserIcon className={style.userIcon}></UserIcon>
        </Link>
      </nav>
    </>
  );
};
