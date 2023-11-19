import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DashBoardPage } from "../pages/DashBoardPage";
import { VacanciesPage } from "../pages/Vacancies";
import { AboutUsPage } from "../pages/AboutUs";
import { PerfilPage } from "../pages/PerfilPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutUs" element={<AboutUsPage />} />
      <Route path="/DashBoard" element={<DashBoardPage />} />
      <Route path="/Vacancies" element={<VacanciesPage />} />
      <Route path="/perfil" element={<PerfilPage />} />
    </Routes>
  );
};
