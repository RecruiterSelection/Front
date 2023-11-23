import { createContext, useCallback, useState } from "react";
import {
  ICreateVacancie,
  IProviderProps,
  IRequestAllVancancies,
  IVacancie,
  IVacanciesContext,
} from "./types";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const VacancieContext = createContext({} as IVacanciesContext);

export const VacancieProvider = ({ children }: IProviderProps) => {
  const [vacancies, setVacancies] = useState<IVacancie[]>([]);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const createVacancie = async (
    data: ICreateVacancie
  ): Promise<IVacancie | undefined> => {
    try {
      const response = await api.post("/jobs", data);
      toast("Vaga criada com sucesso.");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllVacancies = useCallback(
    async (
      page: string,
      limit: string
    ): Promise<IRequestAllVancancies | undefined> => {
      try {
        const response = await api.get("/jobs", {
          params: {
            page,
            limit,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
          },
        });
        console.log(response.data);
        if (response.data.totalPages === null) {
          setTotalPages(10);
        }
        setTotalPages(response.data.totalPages);
        setVacancies(response.data.jobs);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  const updateVacancie = async (id: number, data: any) => {};

  const deleteVacancie = async (id: number) => {
    await api
      .delete(`/jobs/${id}`)
      .then(() => toast.success("Vaga deletada com sucesso"))
      .catch((err) => console.error(err));
  };

  return (
    <VacancieContext.Provider
      value={{
        getAllVacancies,
        vacancies,
        totalPages,
      }}>
      {children}
    </VacancieContext.Provider>
  );
};
