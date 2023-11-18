import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/globalStyles";
import { ResetStyle } from "./styles/resetStyles";
import { UserProvider } from "./providers/user/userProvider";
import { ModalProvider } from "./providers/modal";

export const App = () => {
  return (
    <ModalProvider>
      <UserProvider>
        <GlobalStyle />
        <ResetStyle />
        <RoutesMain />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </UserProvider>
    </ModalProvider>
  );
};
