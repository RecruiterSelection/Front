import { VacancieProvider } from "./VacancieContext";
import { CandidateTechSkillsProvider } from "./candidateTechSkillProvider";
import { TechSkillsProvider } from "./techSkillsProvider";
import { CandidateProvider } from "./user/perfilCandidato/candidatesProvider";
import React from "react";
import { UserProvider } from "./user/userProvider";
import { ApplicationsProvider } from "./applicationsProvider";

export const ProvidersComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <UserProvider>
        <CandidateTechSkillsProvider>
          <TechSkillsProvider>
            <CandidateProvider>
              <ApplicationsProvider>
                <VacancieProvider>{children}</VacancieProvider>
              </ApplicationsProvider>
            </CandidateProvider>
          </TechSkillsProvider>
        </CandidateTechSkillsProvider>
      </UserProvider>
    </>
  );
};
