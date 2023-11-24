import { createContext, useState } from "react";
import {
  ICandidateTechSkillContext,
  IDefaultCandidateTechSkillsProps,
  TCandidateSkillsResponse,
} from "./interfaces";
import { api } from "../../services/api";

export const CandidateTechSkillsContext = createContext(
  {} as ICandidateTechSkillContext
);

export const CandidateTechSkillsProvider = ({
  children,
}: IDefaultCandidateTechSkillsProps) => {
  const [candidateTechSkills, setCandidateTechSkills] =
    useState<TCandidateSkillsResponse>([]);

  const getCandidateTechSkills = async (): Promise<
    TCandidateSkillsResponse | undefined
  > => {
    try {
      const response = await api.get(`/candidates-tech-skills`, {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        // },
      });
      console.log(response.data);
      setCandidateTechSkills(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CandidateTechSkillsContext.Provider
      value={{ getCandidateTechSkills, candidateTechSkills }}>
      {children}
    </CandidateTechSkillsContext.Provider>
  );
};
