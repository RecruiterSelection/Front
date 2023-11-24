import { VacancieProvider } from "./VacancieContext";
import { CandidateTechSkillsProvider } from "./candidateTechSkillProvider";
import { TechSkillsProvider } from "./techSkillsProvider";
import { CandidateProvider } from "./user/perfilCandidato/userProvider";
import React from "react";

export const ProvidersComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <CandidateTechSkillsProvider>
        <TechSkillsProvider>
          <CandidateProvider>
            <VacancieProvider>{children}</VacancieProvider>
          </CandidateProvider>
        </TechSkillsProvider>
      </CandidateTechSkillsProvider>
    </>
  );
};
