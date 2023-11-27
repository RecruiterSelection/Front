import { Dispatch, SetStateAction } from "react";

export interface IModalContext {
  modalOpen: JSX.Element | null;
  setModalOpen: Dispatch<SetStateAction<JSX.Element | null>>;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}
