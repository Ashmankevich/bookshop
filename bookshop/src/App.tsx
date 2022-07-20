import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Account } from "./pages/account/Account";
import { AppPages } from "./types";
import { FavouriteBooks } from "./pages/favourite-books/FavouriteBooks";
import { Home } from "./pages/home/Home";
import { SelectedBook } from "./pages/selected-book/SelectedBook";
import { SignIn } from "./pages/sign-in/SignIn";
import { SignUp } from "./pages/sign-up/SignUp";
import { ShoppingCart } from "./pages/shopping-cart/ShoppingCart";
import { Search } from "./features/search/Search";
import { DetailedBook } from "./pages/detailed-book/DetailedBook";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path={AppPages.ACCOUNT} element={<Account />} />
          <Route path={AppPages.DETAILED_BOOK} element={<DetailedBook />} />
          <Route path={AppPages.FAVOURITE_BOOKS} element={<FavouriteBooks />} />
          <Route path={AppPages.SELECTED_BOOK} element={<SelectedBook />} />
          <Route path={AppPages.SEARCH} element={<Search />} />
          <Route path={AppPages.SIGN_IN} element={<SignIn />} />
          <Route path={AppPages.SIGN_UP} element={<SignUp />} />
          <Route path={AppPages.SHOPPING_CART} element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
