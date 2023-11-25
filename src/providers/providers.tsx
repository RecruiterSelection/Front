import { VacancieProvider } from "./VacancieContext";
import { CandidateTechSkillsProvider } from "./candidateTechSkillProvider";
import { TechSkillsProvider } from "./techSkillsProvider";
import { CandidateProvider } from "./user/perfilCandidato/candidatesProvider";
import React from "react";
import { UserProvider } from "./user/userProvider";
import { RecruiterProvider } from "./user/perfilRecruiter/userProvider";

export const ProvidersComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <UserProvider>
        <CandidateTechSkillsProvider>
          <TechSkillsProvider>
            <CandidateProvider>
              <RecruiterProvider>
                <VacancieProvider>{children}</VacancieProvider>
              </RecruiterProvider>
            </CandidateProvider>
          </TechSkillsProvider>
        </CandidateTechSkillsProvider>
      </UserProvider>
    </>
  );
};
