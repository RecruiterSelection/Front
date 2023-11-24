import { createContext, useState } from "react";
import {
  IDefaultTechSkillsProps,
  ITechSkill,
  ITechSkillContext,
} from "./interfaces";
import { api } from "../../services/api";

export const TechSkillsContext = createContext({} as ITechSkillContext);

export const TechSkillsProvider = ({ children }: IDefaultTechSkillsProps) => {
  const [techSkills, setTechSkills] = useState<ITechSkill[]>([]);

  const getTechSkills = async (): Promise<ITechSkill[] | undefined> => {
    try {
      const response = await api.get(`tech-skills`, {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        // },
      });
      console.log(response.data);
      setTechSkills(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechSkillsContext.Provider value={{ techSkills, getTechSkills }}>
      {children}
    </TechSkillsContext.Provider>
  );
};
