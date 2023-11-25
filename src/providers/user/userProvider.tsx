import { createContext, useContext, useState } from "react";
import {
  IDefaultProviderProps,
  ILoginUser,
  IRegisterUser,
  IResetPassword,
  ISendEmail,
  IUser,
  IUserContext,
  TUpdateUser,
} from "./interface";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../modal";
import { LoginForm } from "../../pages/LoginModal/loginForm";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const { setModalOpen } = useContext(ModalContext);

  const navigate = useNavigate();

  const createUser = async (data: IRegisterUser) => {
    await api
      .post("/users", data)
      .then((res) => {
        setUserData(res.data);
        toast.success("Perfil criado com succeso!");
        // setModalOpen(null);
        // setTimeout(() => {
        //   setModalOpen(<LoginForm />);
        // }, 1000);
      })
      .catch((err) => console.error(err));
  };

  const getUserProfile = async (id: number) => {
    const userId = localStorage.getItem("@userId");

    await api
      .get(`/users/${Number(userId)}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        setUserData(res.data);
        localStorage.setItem("@userMail", res.data.email);
        console.log(res.data, "getUserProfile");
      })
      .catch((err) => console.error(err));
  };

  const getUser = async () => {
    await api
      .get(`/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.error(err));
  };

  const updateUser = async (data: TUpdateUser) => {
    await api
      .patch(`/users/${userData.id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
        getUser();
        toast.success("Perfil editado com succeso!");
      })
      .catch((err) => toast.error(err));
  };

  const deleteUser = async () => {
    await api
      .delete(`/users/${userData.id}`)
      .then(() => {
        toast.success("Perfil deletado com sucesso");
        setModalOpen(null);
        logoutUser();
      })
      .catch((err) => console.error(err));
  };

  const loginUser = async (data: ILoginUser) => {
    await api
      .post("/auth/login", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("@TOKEN", res.data.accessToken);
        localStorage.setItem("@userId", res.data.userId);

        getUserProfile(res.data.userId);

        navigate("/Dashboard");
        toast.success("Login realizado com sucesso!");
      })
      .catch((err) => {
        toast.error("Email ou Senha incorreta");
        console.error(err);
      });
  };

  const logoutUser = () => {
    setUserData({} as IUser);
    localStorage.clear();
    navigate("/");
  };

  const sendEmail = (data: ISendEmail) => {
    api
      .post("/users/resetPassword", data)
      .then(() => {
        toast.success("E-mail enviado com sucesso !");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao enviar o e-mail, tente novamente mais tarde");
      });
  };

  const resetPassword = (data: IResetPassword, token: string) => {
    api
      .patch(`/users/resetPassword/${token}`, {
        password: data.password,
      })
      .then(() => {
        toast.success("Senha atualizada com sucesso !");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao atualizar a senha");
      });
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        createUser,
        getUser,
        updateUser,
        deleteUser,
        loginUser,
        logoutUser,
        getUserProfile,
        sendEmail,
        resetPassword,
      }}>
      {children}
    </UserContext.Provider>
  );
};
