import { createContext, useState } from "react";
import { ICreateVacancie, IProviderProps, IVacancie, IVacanciesContext } from "./types";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const VacancieContext = createContext({} as IVacanciesContext);



export const VacancieProvider = ({ children }: IProviderProps) => {
  const [vacancies, setVacancies] = useState<IVacancie[]>([]);

  const createVacancie = async (data: ICreateVacancie): Promise<IVacancie | undefined> => {
    try{
      const response = await api.post('/vacancies', data);
      toast("Vaga criada com sucesso.")
      return response.data
    } catch(error){
      console.log(error)
    }
  };

  const getAllVacancies = async ():Promise<IVacancie[] | undefined> => {
    try{
      const response = await api.get('/jobs', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@TOKEN')}`,
        },
      });
      setVacancies(response.data)
      return response.data
    } catch(error){
      console.log(error)
    }
  };

  const updateVacancie = async (id: number, data: any) => {
    await api
      .patch(`/jobs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        getVacancie();
        toast.success("Vaga editada com succeso!");
      })
      .catch((err) => toast.error(err));
  };

  const deleteVacancie = async (id: number) => {
    await api
      .delete(`/jobs/${id}`)
      .then(() => toast.success("Vaga deletada com sucesso"))
      .catch((err) => console.error(err));
  };

  return (
    <VacancieContext.Provider
      value={{
        getAllVacancies, vacancies
      }}
    >
      {children}
    </VacancieContext.Provider>
  );
};
