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
  profileRecruiter: IPerfilRecruiter | null;
  createPerfilRecruiter: (
    data: IRegisterPerfilRecruiter,
    id: number
  ) => Promise<void>;
  getRecruiterProfile: (id: number) => Promise<void>;
  updateRecruiterProfile: (
    data: IRegisterPerfilRecruiter,
    id: number
  ) => Promise<void>;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}
