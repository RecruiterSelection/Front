import { createContext, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IDefaultProviderProps } from "../interface";
import {
  IPerfilCandidate,
  IPerfilCandidateWithEmail,
  IPerfilContext,
  TUpdatePerfilCandidate,
} from "./interface";
import { useNavigate } from "react-router-dom";

export const CandidateContext = createContext({} as IPerfilContext);

export const CandidateProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();

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
        navigate("/Dashboard");
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
  ): Promise<IPerfilCandidateWithEmail | undefined> => {
    try {
      const response = await api.patch(`/candidates/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });
      setProfile(response.data);
      setCandidateWithEmail((prevData) => ({ ...prevData, ...response.data }));
      toast.success("Perfil editado com succeso.");

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CandidateContext.Provider
      value={{
        createPerfilCandidate,
        getCandidateProfile,
        updateCandidateProfile,
        candidateWithEmail,
        getCandidateByEmail,
      }}>
      {children}
    </CandidateContext.Provider>
  );
};
