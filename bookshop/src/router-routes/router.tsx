import { Routes, Route } from "react-router-dom";
import { Search } from "../features/search/SearchResultPage/SearchResultPage";
import { Layout } from "../layout/Layout";
import { Account } from "../pages/account/Account";
import { DetailedBook } from "../pages/detailed-book/DetailedBook";
import { Favourite } from "../pages/favourite/Favourite";
import { Home } from "../pages/home/Home";
import { NotFoundPage } from "../pages/not-found/NotFoundPage";
import { ShoppingCart } from "../pages/shopping-cart/ShoppingCart";
import { SignIn } from "../pages/sign-in/SignIn";
import { SignUp } from "../pages/sign-up/SignUp";
import { AppPages } from "./routes";

export const Router = () => {
  return (
    <Routes>
      <Route path={AppPages.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={AppPages.ACCOUNT} element={<Account />} />
        <Route path={AppPages.DETAILED_BOOK} element={<DetailedBook />} />
        <Route path={AppPages.FAVOURITE} element={<Favourite />} />
        <Route path={AppPages.SEARCH} element={<Search />} />
        <Route path={AppPages.SIGN_IN} element={<SignIn />} />
        <Route path={AppPages.SIGN_UP} element={<SignUp />} />
        <Route path={AppPages.SHOPPING_CART} element={<ShoppingCart />} />
        <Route path={AppPages.NOT_FOUND_PAGE} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
