import React from "react";
import { AppContext } from "./AppContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Account } from "./pages/Account";
import { AppPages } from "./routes";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ShoppingCart } from "./pages/ShoppingCart";
import { Search } from "./features/search/Search";
import { DetailedBook } from "./pages/DetailedBook";
import { Home } from "./pages/Home";

function App() {
  const appRef = React.createRef<HTMLDivElement>();
  return (
    <div className="app" ref={appRef}>
      <AppContext.Provider value={appRef}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route index element={<Navigate to={AppPages.HOME} />} />
            <Route path={AppPages.HOME} element={<Home />} />
            <Route path={AppPages.ACCOUNT} element={<Account />} />
            <Route path={AppPages.DETAILED_BOOK} element={<DetailedBook />} />
            <Route path={AppPages.SEARCH} element={<Search />} />
            <Route path={AppPages.SIGN_IN} element={<SignIn />} />
            <Route path={AppPages.SIGN_UP} element={<SignUp />} />
            <Route path={AppPages.SHOPPING_CART} element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
