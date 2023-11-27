import { useContext } from "react";
import { UserContext } from "../../../providers/user/userProvider";
import { ModalContext } from "../../../providers/modal";
import { DivStyled } from "./style";

export const DeleteUserModal = () => {
  const { deleteUser } = useContext(UserContext);
  const { setModalOpen } = useContext(ModalContext);
  return (
    <DivStyled>
      <h1>Tem certeza que deseja excluir sua conta?</h1>
      <div>
        <button onClick={() => setModalOpen(null)}>Cancelar</button>
        <button onClick={() => deleteUser()} id="delete_button">
          Confirmar
        </button>
      </div>
    </DivStyled>
  );
};
