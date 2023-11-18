import { Backdrop, Box, Modal, styled } from "@mui/material";
import { LoginForm } from "../../Form/Login";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const BlurredBackdrop = styled(Backdrop)`
  backdrop-filter: blur(5px);
`;

export const LoginModal : React.FC<LoginModalProps> = ({ open, onClose }) => {
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
        <LoginForm closeModal={onClose} />
      </Box>
    </Modal>
  );
};
