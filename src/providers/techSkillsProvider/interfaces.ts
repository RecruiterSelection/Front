export interface IDefaultTechSkillsProps {
  children: React.ReactNode;
}

export interface ITechSkillContext {
  techSkills: ITechSkill[];
  getTechSkills: () => Promise<ITechSkill[] | undefined>;
}

export interface ITechSkill {
  skillId: number;
  name: string;
}
