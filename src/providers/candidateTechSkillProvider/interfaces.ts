export interface IDefaultCandidateTechSkillsProps {
  children: React.ReactNode;
}

export interface ICandidateTechSkillContext {
  getCandidateTechSkills: () => Promise<TCandidateSkillsResponse | undefined>;
  candidateTechSkills: TCandidateSkillsResponse;
  createNewCandidateTechSkill: () => Promise<
    INewCandidateTechSkill | undefined
  >;
}

interface Candidate {
  firstName: string;
  lastName: string;
  education: string;
  experience: string;
  references: string;
  address: string;
  userId: number;
}

interface TechnologySkill {
  name: string;
}

export interface ICandidateSkill {
  id: number;
  candidateId: number;
  skillId: number;
  Candidate: Candidate;
  TechnologySkill: TechnologySkill;
}

export type TCandidateSkillsResponse = ICandidateSkill[];

export interface INewCandidateTechSkill {
  id: number;
  candidateId: number;
  skillId: number;
}
