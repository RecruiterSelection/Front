export interface IVacanciesContext {
  getAllVacancies: () => Promise<IVacancie[] | undefined>;
  vacancies: IVacancie[];
}

export interface IProviderProps {
  children: React.ReactNode;
}

export interface IVacancie {
  jobId: number;
  recruitersRecruiterId: number;
  title: string;
  description: string;
  requirements: string;
  responsibilities: string;
  benefits: string;
  location: string;
  jobType: "FULL_TIME" | "PART_TIME" | "FREELANCE";
  created_at: string;
  updated_at: string;
}

export interface ICreateVacancie {
  title: string;
  description: string;
  requirements: string;
  responsibilities: string;
  benefits: string;
  location: string;
  jobType: "FULL_TIME" | "PART_TIME" | "FREELANCE";
}
