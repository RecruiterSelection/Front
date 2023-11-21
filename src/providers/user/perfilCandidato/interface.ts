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
  user: IRegisterPerfilCandidate | null;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}
