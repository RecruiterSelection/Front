import { createContext, useState } from "react";

import { api } from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { IDefaultProviderProps } from "../interface";
import {
  IPerfilCandidate,
  IPerfilContext,
  IRegisterPerfilCandidate,
  TUpdatePerfilCandidate,
} from "./interface";

export const UserContext = createContext({} as IPerfilContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [profile, setProfile] = useState<IPerfilCandidate>(
    {} as IPerfilCandidate
  );

  //const navigate = useNavigate();

  const createPerfilCandidate = async (
    data: IRegisterPerfilCandidate,
    id: number
  ) => {
    await api
      .post(`/candidates/${id}`, data)
      .then((res) => {
        setProfile(res.data);
        toast.success("Perfil criado com succeso!");
      })
      .catch((err) => console.error(err));
  };

  const getCandidateProfile = async (id: number) => {
    await api
      .get(`/candidates${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => console.error(err));
  };

  const updateCandidateProfile = async (
    data: TUpdatePerfilCandidate,
    id: number
  ) => {
    await api
      .patch(`/candidates/${id}`, data, {
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
