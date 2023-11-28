import { VacanciesStyledContainer } from "./style";
import { FooterComponent } from "../../components/Footer";
import { RegisterJob } from "../../components/Forms/RegisterJobs";

export const VacanciesPageCreat = () => {
  return (
    <VacanciesStyledContainer>
      <RegisterJob />
      <FooterComponent />
    </VacanciesStyledContainer>
  );
};
