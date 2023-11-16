import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/globalStyles";
import { ResetStyle } from "./styles/resetStyles";

export const App = () => {
  return (
    <>
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
    </>
  );
};
