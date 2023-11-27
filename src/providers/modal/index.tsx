import { createContext, useState } from "react";
import { IDefaultProviderProps, IModalContext } from "./interface";

export const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: IDefaultProviderProps) => {
  const [modalOpen, setModalOpen] = useState<JSX.Element | null>(null);

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
