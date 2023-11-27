import { useContext } from "react";
import { ModalContext } from "../../../providers/modal";
import { ModalContainer } from "./style";

interface DeleteApplicationModalProps {
  returnToApplicationModal: () => void;
  applicationModalId: number;
  deleteApplication: (applicationId: number) => Promise<void>;
}

export const DeleteApplicationModal: React.FC<DeleteApplicationModalProps> = ({
  returnToApplicationModal,
  applicationModalId,
  deleteApplication,
}) => {
  const { setModalOpen } = useContext(ModalContext);

  const handleReturn = () => {
    returnToApplicationModal();
  };
  const handleClick = async () => {
    console.log(applicationModalId);
    await deleteApplication(applicationModalId);
    setModalOpen(null);
  };
  return (
    <ModalContainer>
      <h1>Deseja mesmo desistir da vaga?</h1>
      <div className="buttons_wrapper">
        <button onClick={() => handleClick()}>Desistir</button>
        <button onClick={() => handleReturn()}>Voltar</button>
      </div>
    </ModalContainer>
  );
};
