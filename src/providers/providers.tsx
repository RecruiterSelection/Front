import { VacancieProvider } from "./VacancieContext";
import { CandidateTechSkillsProvider } from "./candidateTechSkillProvider";
import { TechSkillsProvider } from "./techSkillsProvider";
import { CandidateProvider } from "./user/perfilCandidato/candidatesProvider";
import React from "react";
import { UserProvider } from "./user/userProvider";

export const ProvidersComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <UserProvider>
        <CandidateTechSkillsProvider>
          <TechSkillsProvider>
            <CandidateProvider>
              <VacancieProvider>{children}</VacancieProvider>
            </CandidateProvider>
          </TechSkillsProvider>
        </CandidateTechSkillsProvider>
      </UserProvider>
    </>
  );
};
