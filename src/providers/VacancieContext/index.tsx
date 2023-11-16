import { createContext, useState } from "react";
import { IProviderProps, IVacanciesContext } from "./types";

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
  const [Vacancies, SetVacancies] = useState([...vacancie]);

  return (
    <VacancieContext.Provider value={{ Vacancies, SetVacancies }}>
      {children}
    </VacancieContext.Provider>
  );
};
