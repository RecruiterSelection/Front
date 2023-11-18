import { Backdrop, Box, Modal, styled } from "@mui/material";
import React, { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BlurredBackdrop = styled(Backdrop)`
  backdrop-filter: blur(5px);
`;

export const GenericModal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose} BackdropComponent={BlurredBackdrop}>
      <Box
        sx={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};
