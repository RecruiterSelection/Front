import { createContext, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IDefaultProviderProps } from "../interface";
import {
  IPerfilCandidate,
  IPerfilCandidateWithEmail,
  IPerfilContext,
  IRegisterPerfilCandidate,
  TUpdatePerfilCandidate,
} from "./interface";
import React from "react";

export const CandidateContext = createContext({} as IPerfilContext);

export const CandidateProvider = ({ children }: IDefaultProviderProps) => {
  const [profile, setProfile] = useState<IPerfilCandidate>(
    {} as IPerfilCandidate
  );
  const [candidateWithEmail, setCandidateWithEmail] = useState<
    IPerfilCandidateWithEmail | undefined
  >();

  const createPerfilCandidate = async (data: any, id: number) => {
    await api
      .post(`/candidates/${id}`, data)
      .then((res) => {
        setProfile(res.data);
        toast.success("Perfil criado com succeso!");
      })
      .catch((err) => console.error(err));
  };

  const getCandidateByEmail = async (
    email: string
  ): Promise<IPerfilCandidateWithEmail | undefined> => {
    try {
      const response = await api.get(`/candidates/email/${email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });
      console.log(response.data, "getCandidateByEmail");
      setCandidateWithEmail(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
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

  return (
    <CandidateContext.Provider
      value={{
        createPerfilCandidate,
        getCandidateProfile,
        updateCandidateProfile,
        candidateWithEmail,
        getCandidateByEmail,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
};
