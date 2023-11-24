import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { VacanciesPage } from "../pages/Vacancies";
import { AboutUsPage } from "../pages/AboutUs";
import { PerfilPage } from "../pages/PerfilPage";
import { Modal } from "../components/Modal";
import { useContext } from "react";
import { ModalContext } from "../providers/modal";

import { ProtectedRoute } from "./protectRoutes";
import { ProtectedLayout } from "./protectedLayout";
import { ContactPage } from "../pages/Contact";
import { DashBoardPage } from "../pages/DashBoardPage";
import { ResetPasswordPage } from "../pages/ResetPassword";

export const RoutesMain = () => {
  const { modalOpen } = useContext(ModalContext);

  return (
    <>
      {modalOpen && <Modal />}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/vacancies" element={<VacanciesPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/dashBoard" element={<DashBoardPage />} />
            <Route path="/perfil" element={<PerfilPage />} />
          </Route>
        </Route>
        <Route path="/resetPassword/:token" element={<ResetPasswordPage />} />
      </Routes>
    </>
  );
};
