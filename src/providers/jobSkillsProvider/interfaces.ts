export interface IJobSkillsContext {
  getMatchingJobsForCandidate: (
    candidateId: number
  ) => Promise<JobSkillsArray | undefined>;

  matchingJobs: JobSkillsArray;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

interface Job {
  jobId: number;
  recruitersRecruiterId: number;
  title: string;
  description: string;
  requirements: string;
  responsibilities: string;
  benefits: string;
  location: string;
  jobType: "FREELANCE" | "FULL_TIME" | "PART_TIME";
  created_at: string;
  updated_at: string;
}

interface Skill {
  skillId: number;
  name: string;
}

interface Job {
  jobId: number;
  recruitersRecruiterId: number;
  title: string;
  description: string;
  requirements: string;
  responsibilities: string;
  benefits: string;
  location: string;
  jobType: "FREELANCE" | "FULL_TIME" | "PART_TIME";
  created_at: string;
  updated_at: string;
}

interface JobSkill {
  id: number;
  jobId: number;
  skillId: number;
  Job: Job;
  Skill: Skill;
}

// Para um array destes objetos:
export type JobSkillsArray = JobSkill[];

interface Job {
  jobId: number;
  recruitersRecruiterId: number;
  title: string;
  description: string;
  requirements: string;
  responsibilities: string;
  benefits: string;
  location: string;
  jobType: "FULL_TIME" | "PART_TIME" | "FREELANCE";
  created_at: string;
  updated_at: string;
  skills: string[];
}

export type UniqueJobsArray = Job[];
