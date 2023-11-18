export interface IModalContext {
  modalOpen: string | null;
  openModal: (modalName: string) => void;
  closeModal: () => void;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}
