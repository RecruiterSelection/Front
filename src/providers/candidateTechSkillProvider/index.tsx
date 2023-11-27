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

  const createNewCandidateTechSkill = async (
    candidateId: string,
    skillId: string
  ): Promise<INewCandidateTechSkill | undefined> => {
    try {
      const response = await api.post(
        `candidates-tech-skills/${candidateId}/${skillId}`
      );
      console.log(response.data, "Respostaaaaaaaaaaaaaa");
      setCandidateTechSkills((prevSkills) => [...prevSkills, response.data]);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const removeCandidateTechSkill = async (techSkillId: string) => {
    try {
      const response = await api.delete(
        `/candidates-tech-skills/${techSkillId}`
      );
      console.log(response.data, "removeCandidateTechSkill");
      setCandidateTechSkills(
        candidateTechSkills.filter((skill) => skill.id !== +techSkillId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CandidateTechSkillsContext.Provider
      value={{
        getCandidateTechSkills,
        candidateTechSkills,
        createNewCandidateTechSkill,
        removeCandidateTechSkill,
      }}>
      {children}
    </CandidateTechSkillsContext.Provider>
  );
};
