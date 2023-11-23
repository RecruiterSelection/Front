export interface IVacanciesContext {
  getAllVacancies: (
    page: string,
    limit: string
  ) => Promise<IRequestAllVancancies | undefined>;
  vacancies: IVacancie[];
  totalPages: number | null | undefined;
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

export interface IRequestAllVancancies {
  jobs: IVacancie[];
  total: number;
  totalPages: number | null;
}
