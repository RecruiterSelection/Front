import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/globalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyle />
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
