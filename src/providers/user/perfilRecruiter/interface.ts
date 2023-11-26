import { DeepPartial } from "react-hook-form";

export interface IPerfilRecruiter {
  recruiterId: number;
  userId: number;
  firstName: string;
  lastName: string;
  companyName: string;
  contactNumber: string;
  address: string;
  created_at: string;
  updated_at: string;
}

export interface IRegisterPerfilRecruiter {
  firstName: string;
  lastName: string;
  companyName: string;
  contactNumber: string;
  address: string;
}

export type TUpdatePerfilRecruiter = DeepPartial<IRegisterPerfilRecruiter>;

export interface IPerfilRecruiterContext {
  createPerfilRecruiter: (
    data: IRegisterPerfilRecruiter,
    id: number
  ) => Promise<IPerfilRecruiter>;
  getRecruiterProfile: (id: number) => Promise<IPerfilRecruiter>;
  updateRecruiterProfile: (
    data: TUpdatePerfilRecruiter,
    id: number
  ) => Promise<void>;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}
