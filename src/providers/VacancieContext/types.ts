import { string } from "zod";

export interface IVacanciesContext {
  Vacancies: any;
  SetVacancies: React.Dispatch<React.SetStateAction<any>>;
}

export interface IProviderProps {
  children: React.ReactNode;
}

export interface IVacancie {
  jobId: string;
  recruiter: number;
  recruitersRecruiterId: number;
  title: string;
  description: string;
  requirements: string;
  responsibilities: string;
  benefitis: string;
  location: string;
  jobType: string;
  created_at: string;
  updated_at: string;
  Applications: string;
}
