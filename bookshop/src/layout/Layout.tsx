import { Outlet } from "react-router-dom";
import { Header } from "../features/header/Header";
import { Footer } from "../ui/footer/Footer";
import style from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={style.wrapper}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
