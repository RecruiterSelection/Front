import { createContext, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IDefaultProviderProps } from "../interface";
import {
  IPerfilRecruiter,
  IPerfilContext,
  IRegisterPerfilRecruiter,
  TUpdatePerfilRecruiter,
} from "./interface";

export const UserContext = createContext({} as IPerfilContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [profile, setProfile] = useState<IPerfilRecruiter>(
    {} as IPerfilRecruiter
  );

  //const navigate = useNavigate();

  const createPerfilRecruiter = async (
    data: IRegisterPerfilRecruiter,
    id: number
  ) => {
    await api
      .post(`/recruiters/${id}`, data)
      .then((res) => {
        setProfile(res.data);
        toast.success("Perfil criado com succeso!");
      })
      .catch((err) => console.error(err));
  };

  const getRecruiterProfile = async (id: number) => {
    await api
      .get(`/recruiters${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => console.error(err));
  };

  const updateRecruiterProfile = async (
    data: TUpdatePerfilRecruiter,
    id: number
  ) => {
    await api
      .patch(`/recruiters/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        setProfile(res.data);
        toast.success("Perfil editado com succeso!");
      })
      .catch((err) => toast.error(err));
  };

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
