import { createContext, useState } from "react";
import { IProviderProps, IVacanciesContext } from "./types";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const VacancieContext = createContext({} as IVacanciesContext);

const vacancie = [
  {
    title: "Desenvolvedor Front-end",
    type: "remoto",
    time: "integral",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nisi, ab voluptatum id consectetur temporibus cupiditate ea maxime incidunt suscipit pariatur fugiat nemo culpa earum repudiandae adipisci repellendus odio? Quam?",
    requireds:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nisi, ab voluptatum id consectetur temporibus cupiditate ea maxime incidunt suscipit pariatur fugiat nemo culpa earum repudiandae adipisci repellendus odio? Quam?",
  },
  {
    title: "Desenvolvedor Back-end",
    type: "remoto",
    time: "integral",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nisi, ab voluptatum id consectetur temporibus cupiditate ea maxime incidunt suscipit pariatur fugiat nemo culpa earum repudiandae adipisci repellendus odio? Quam?",
    requireds:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nisi, ab voluptatum id consectetur temporibus cupiditate ea maxime incidunt suscipit pariatur fugiat nemo culpa earum repudiandae adipisci repellendus odio? Quam?",
  },
  {
    title: "Desenvolvedor Full-Stack senior",
    type: "remoto",
    time: "integral",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nisi, ab voluptatum id consectetur temporibus cupiditate ea maxime incidunt suscipit pariatur fugiat nemo culpa earum repudiandae adipisci repellendus odio? Quam?",
    requireds:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nisi, ab voluptatum id consectetur temporibus cupiditate ea maxime incidunt suscipit pariatur fugiat nemo culpa earum repudiandae adipisci repellendus odio? Quam?",
  },
  {
    title: "Desenvolvedor Full Stack junior",
    type: "remoto",
    time: "integral",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nisi, ab voluptatum id consectetur temporibus cupiditate ea maxime incidunt suscipit pariatur fugiat nemo culpa earum repudiandae adipisci repellendus odio? Quam?",
    requireds:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nisi, ab voluptatum id consectetur temporibus cupiditate ea maxime incidunt suscipit pariatur fugiat nemo culpa earum repudiandae adipisci repellendus odio? Quam?",
  },
];

export const VacancieProvider = ({ children }: IProviderProps) => {
  const [vacancies, SetVacancies] = useState([...vacancie]);

  const createVacancie = async (data: any) => {
    await api
      .post("/vacancies", data)
      .then((res) => {
        SetVacancies(res.data);
        toast.success("Vaga criada com succeso!");
      })
      .catch((err) => console.error(err));
  };

  const getVacancie = async () => {
    await api
      .get(`/vacancies`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((res) => {
        SetVacancies(res.data);
      })
      .catch((err) => console.error(err));
  };

  const updateVacancie = async (id: number, data: any) => {
    await api
      .patch(`/vacancies/${id}`, data, {
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
      .delete(`/vacancies/${id}`)
      .then(() => toast.success("Vaga deletada com sucesso"))
      .catch((err) => console.error(err));
  };

  return (
    <VacancieContext.Provider
      value={{
        vacancies,
        SetVacancies,
        createVacancie,
        getVacancie,
        updateVacancie,
        deleteVacancie,
      }}
    >
      {children}
    </VacancieContext.Provider>
  );
};
