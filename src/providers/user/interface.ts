import { DeepPartial } from "react-hook-form";

export interface IUser {
  id: number;
  email: string;
  role: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  email: string;
  password: string;
  role: string;
}

export interface IUserContext {
  user: IUser | null;
  createUser: (data: IRegisterUser) => Promise<void>;
  getUser: () => Promise<void>;
  updateUser: (data: TUpdateUser) => Promise<void>;
  deleteUser: () => Promise<void>;
  loginUser: (data: ILoginUser) => Promise<void>;
  logoutUser: () => void;
  getUserProfile: (id: number) => void;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export type TUpdateUser = DeepPartial<IRegisterUser>;
