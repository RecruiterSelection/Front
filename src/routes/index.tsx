import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashBoardPage } from "../pages/DashBoardPage";
import { VacanciesPage } from "../pages/Vacancies";
import { PerfilPage } from "../pages/PerfilPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/DashBoard" element={<DashBoardPage />} />
      <Route path="/Vacancies" element={<VacanciesPage />} />
      <Route path="/perfil" element={<PerfilPage />} />
    </Routes>
  );
};
