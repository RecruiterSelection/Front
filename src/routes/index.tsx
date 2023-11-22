import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DashBoardPage } from "../pages/DashBoardPage";
import { VacanciesPage } from "../pages/Vacancies";
import { AboutUsPage } from "../pages/AboutUs";
import { PerfilPage } from "../pages/PerfilPage";
import { Modal } from "../components/Modal";
import { useContext } from "react";
import { ModalContext } from "../providers/modal";
import { ProtectedRoute } from "./protectRoutes";
import { ProtectedLayout } from "./protectedLayout";
import { FooterComponent } from "../components/Footer";

export const RoutesMain = () => {
  const { modalOpen } = useContext(ModalContext);

  return (
    <>
      {modalOpen && <Modal />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route element={<ProtectedRoute/>}>
          <Route element={<ProtectedLayout/>}>
            <Route path="/dashBoard" element={<DashBoardPage />} />
            <Route path="/vacancies" element={<VacanciesPage />} />
            <Route path="/perfil" element={<PerfilPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
