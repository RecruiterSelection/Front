import { createContext, useState } from "react";
import {
  IDefaultProviderProps,
  IJobSkillsContext,
  JobSkillsArray,
} from "./interfaces";
import { api } from "../../services/api";

export const JobSkillsContext = createContext({} as IJobSkillsContext);

export const JobSkillsProvider = ({ children }: IDefaultProviderProps) => {
  const [matchingJobs, setMatchingJobs] = useState<JobSkillsArray>([]);

  const getMatchingJobsForCandidate = async (
    candidateId: number
  ): Promise<JobSkillsArray | undefined> => {
    try {
      const response = await api.get(`/job-skills/matching/${candidateId}`);
      console.log(response.data, "getAllJobSkills");
      setMatchingJobs(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <JobSkillsContext.Provider
      value={{ getMatchingJobsForCandidate, matchingJobs }}>
      {children}
    </JobSkillsContext.Provider>
  );
};
