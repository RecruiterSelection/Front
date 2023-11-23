import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { VacanciesPage } from "../pages/Vacancies";
import { AboutUsPage } from "../pages/AboutUs";
import { PerfilPage } from "../pages/PerfilPage";
import { Modal } from "../components/Modal";
import { useContext } from "react";
import { ModalContext } from "../providers/modal";
import { DashBoardPage } from "../pages/DashBoardPage";


export const RoutesMain = () => {
  const { modalOpen } = useContext(ModalContext);

  return (
    <>
      {modalOpen && <Modal />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/DashBoard" element={<DashBoardPage />} />
        <Route path="/Vacancies" element={<VacanciesPage />} />
        <Route path="/Perfil" element={<PerfilPage />} />
      </Routes>
    </>
  );
};
