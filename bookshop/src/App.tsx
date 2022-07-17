import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Account } from "./pages/account/Account";
import { AppPages } from "./types";
import { FavouriteBooks } from "./pages/favourite-books/FavouriteBooks";
import { Home } from "./pages/home/Home";
import { SelectedBook } from "./pages/selected-book/SelectedBook";
import { SignIn } from "./pages/sign-in/SignIn";
import { SignUp } from "./pages/sign-up/SignUp";
import { ShoppingCart } from "./pages/shopping-cart/ShoppingCart";
import { NotFound } from "./pages/not-found/NotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={AppPages.ACCOUNT} element={<Account></Account>}></Route>
        </Routes>
        <Routes>
          <Route
            path={AppPages.FAVOURITE_BOOKS}
            element={<FavouriteBooks></FavouriteBooks>}
          ></Route>
        </Routes>
        <Routes>
          <Route index element={<Home></Home>}></Route>
        </Routes>
        <Routes>
          <Route
            path={AppPages.NOT_FOUND}
            element={<NotFound></NotFound>}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path={AppPages.SELECTED_BOOK}
            element={<SelectedBook></SelectedBook>}
          ></Route>
        </Routes>
        <Routes>
          <Route path={AppPages.SIGN_IN} element={<SignIn></SignIn>}></Route>
        </Routes>
        <Routes>
          <Route path={AppPages.SIGN_UP} element={<SignUp></SignUp>}></Route>
        </Routes>
        <Routes>
          <Route
            path={AppPages.SHOPPING_CART}
            element={<ShoppingCart></ShoppingCart>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
