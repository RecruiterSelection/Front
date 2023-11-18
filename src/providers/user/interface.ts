import { DeepPartial } from 'react-hook-form';

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface ILoginUser{
  email: string;
  password: string;
}

export interface IRegisterUser{
  name: string;
  email: string;
  password: string
}

export interface IUserContext {
    user: IUser | null;
    createUser: (data: IRegisterUser) => Promise<void>;
    getUser: () => Promise<void>;
    updateUser: (data: TUpdateUser) => Promise<void>;
    deleteUser: () => Promise<void>;
    loginUser: (data: ILoginUser) => Promise<void>;
    logoutUser: () => void;
  }
  
  export interface IDefaultProviderProps {
    children: React.ReactNode;
  }

  export type TUpdateUser = DeepPartial<IRegisterUser>;