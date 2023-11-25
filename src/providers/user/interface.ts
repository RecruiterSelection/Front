import { Dispatch, SetStateAction } from "react";
import { DeepPartial } from "react-hook-form";

export interface IUser {
  created_at: string;
  email: string;
  id: number;
  role: string;
  updated_at: string;
  firstAccess: boolean;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  email: string;
  passwordHash: string;
  role: string;
}

export interface IUserContext {
  userData: IUser | null;
  createUser: (data: IRegisterUser) => Promise<void>;
  getUser: () => Promise<void>;
  updateUser: (data: TUpdateUser) => Promise<void>;
  deleteUser: () => Promise<void>;
  loginUser: (data: ILoginUser) => Promise<void>;
  logoutUser: () => void;
  getUserProfile: (id: number) => void;
  sendEmail: (data: ISendEmail) => void;
  resetPassword: (data: IResetPassword, token: string) => void;
  setUserData: Dispatch<SetStateAction<IUser>>;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export type TUpdateUser = DeepPartial<IRegisterUser>;

export interface ISendEmail {
  email: string;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}

export interface IToken {
  token: string;
}
