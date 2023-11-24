import { useContext } from "react";
import { ModalStyled } from "./styled";
import { ModalContext } from "../../providers/modal";
import React from "react";

export const Modal = () => {
  const { modalOpen, setModalOpen } = useContext(ModalContext);

  const closeModal = () => {
    setModalOpen(null);
  };

  return (
    <ModalStyled>
      <div>
        <button onClick={closeModal}>X</button>
        {modalOpen}
      </div>
    </ModalStyled>
  );
};
