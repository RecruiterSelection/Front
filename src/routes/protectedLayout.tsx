import { Outlet } from "react-router-dom";
import { HeaderComponents } from "../components/Header";
import { FooterComponent } from "../components/Footer";

export const ProtectedLayout = () => {
  return (
    <>
      <HeaderComponents />
      <Outlet />
    </>
  );
};
