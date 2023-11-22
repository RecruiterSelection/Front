import { createContext, useState } from "react";
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

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const navigate = useNavigate();

  const createUser = async (data: IRegisterUser) => {
    await api
      .post("/users", data)
      .then((res) => {
        //setUser(res.data);
        console.log(res);
        toast.success("Perfil criado com succeso!");
      })
      .catch((err) => console.error(err));
  };

  const getUserProfile = async (id: number) => {
    await api
      .get(`/users/${id}`, {
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
        localStorage.setItem("@TOKEN", res.data.accessToken);
        console.log(res.data);
        toast.success("Login realizado com sucesso!");
        getUserProfile(res.data.userId);
        setTimeout(() => {
          navigate("/DashBoard");
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
    setTimeout(() => {
      navigate("/");
    }, 3000);
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
