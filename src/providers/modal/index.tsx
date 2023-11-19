import { createContext, useState } from "react";
import { IDefaultProviderProps, IModalContext } from "./interface";

export const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: IDefaultProviderProps) => {
  const [modalOpen, setModalOpen] = useState<string | null>(null);

  const openModal = (modalName: string) => {
    setModalOpen(modalName);
  };

  const closeModal = () => {
    setModalOpen(null);
  };

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
