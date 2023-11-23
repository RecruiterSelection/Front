import { createContext, useContext, useState } from "react";
import {
  IDefaultProviderProps,
  ILoginUser,
  IRegisterUser,
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
  const [user, setUser] = useState<IUser>({} as IUser);
  const { setModalOpen } = useContext(ModalContext);

  const navigate = useNavigate();

  const createUser = async (data: IRegisterUser) => {
    await api
      .post("/users", data)
      .then((res) => {
        setUser(res.data);
        toast.success("Perfil criado com succeso!");
        setTimeout(() => {
          setModalOpen(<LoginForm />);
        }, 3000);
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
        setUser(res.data);
        console.log(res.data);
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
        setUser(res.data);
      })
      .catch((err) => console.error(err));
  };

  const updateUser = async (data: TUpdateUser) => {
    await api
      .patch(`/users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        getUser();
        toast.success("Perfil editado com succeso!");
      })
      .catch((err) => toast.error(err));
  };

  const deleteUser = async () => {
    await api
      .delete(`/users/${user.id}`)
      .then(() => toast.success("Perfil deletado com sucesso"))
      .catch((err) => console.error(err));
  };

  const loginUser = async (data: ILoginUser) => {
    await api
      .post("/auth/login", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("@TOKEN", res.data.accessToken);
        localStorage.setItem("@userId", res.data.userId);

        toast.success("Login realizado com sucesso!");
        getUserProfile(res.data.userId);
        setTimeout(() => {
          navigate("/Dashboard");
        }, 3000);
      })
      .catch((err) => {
        toast.error("Email ou Senha incorreta");
        console.error(err);
      });
  };

  const logoutUser = () => {
    setUser({} as IUser);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        createUser,
        getUser,
        updateUser,
        deleteUser,
        loginUser,
        logoutUser,
        getUserProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
