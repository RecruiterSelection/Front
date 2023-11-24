import { createContext, useState } from "react";
import {
  ICandidateTechSkillContext,
  IDefaultCandidateTechSkillsProps,
  INewCandidateTechSkill,
  TCandidateSkillsResponse,
} from "./interfaces";
import { api } from "../../services/api";
import React from "react";

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
      console.log(response.data, "getCandidateTechSkills");
      setCandidateTechSkills(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createNewCandidateTechSkill = async (): Promise<
    INewCandidateTechSkill | undefined
  > => {
    return Response.data;
  };

  return (
    <CandidateTechSkillsContext.Provider
      value={{
        getCandidateTechSkills,
        candidateTechSkills,
        createNewCandidateTechSkill,
      }}>
      {children}
    </CandidateTechSkillsContext.Provider>
  );
};
