import { DeepPartial } from "react-hook-form";

export interface IPerfilCandidate {
  id: number;
  firstName: string;
  lastName: string;
  contactNumber: string;
  address: string;
  education: string;
  skills: string;
  experience: string;
  references: string;
}

export interface IPerfilCandidateWithEmail extends IPerfilCandidate {
  user: {
    id: number;
    email: string;
  };
}

export interface IRegisterPerfilCandidate {
  firstName: string;
  lastName: string;
  contactNumber: string;
  address: string;
  education: string;
  skills: string;
  experience: string;
  references: string;
}

export type TUpdatePerfilCandidate = DeepPartial<IRegisterPerfilCandidate>;

export interface IPerfilContext {
  createPerfilCandidate: (
    data: IRegisterPerfilCandidate,
    id: number
  ) => Promise<void>;
  getCandidateProfile: (id: number) => Promise<void>;
  updateCandidateProfile: (
    data: TUpdatePerfilCandidate,
    id: number
  ) => Promise<void>;
  candidateWithEmail: IPerfilCandidateWithEmail | undefined;
  getCandidateByEmail: (
    email: string
  ) => Promise<IPerfilCandidateWithEmail | undefined>;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}
