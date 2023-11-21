import { DeepPartial } from "react-hook-form";

export interface IPerfilRecruiter {
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

export interface IRegisterPerfilRecruiter {
  firstName: string;
  lastName: string;
  contactNumber: string;
  address: string;
  education: string;
  skills: string;
  experience: string;
  references: string;
}

export type TUpdatePerfilRecruiter = DeepPartial<IRegisterPerfilRecruiter>;

export interface IPerfilContext {
  user: IRegisterPerfilRecruiter | null;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}
