import { Outlet } from "react-router-dom";
import { HeaderComponents } from "../components/Header";

export const ProtectedLayout = () => {
  return (
    <>
      <HeaderComponents />
      <Outlet />
    </>
  );
};
