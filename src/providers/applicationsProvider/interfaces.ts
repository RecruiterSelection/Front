import { Dispatch, SetStateAction } from "react";

export interface IApplicationContext {
  applicationsData: GetManyApplicationsResponse;

  getAllApplications: () => Promise<GetManyApplicationsResponse | undefined>;
}

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

interface CandidateProfile {
  userId: number;
  firstName: string;
  lastName: string;
  created_at: string;
  updated_at: string;
  education: string;
  experience: string;
  references: string;
  address: string;
}

interface JobListing {
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  requirements: string;
  location: string;
  responsibilities: string;
  benefits: string;
  jobType: "FREELANCE" | "FULL_TIME" | "PART_TIME";
}

type ApplicationStatus =
  | "APPLIED"
  | "REVIEWED"
  | "INTERVIEWED"
  | "HIRED"
  | "REJECTED";

export interface Application {
  applicationId: number;
  jobListingsJobId: number;
  candidateProfilesProfileId: number;
  coverLetter: string;
  resume: string;
  status: ApplicationStatus;
  created_at: string;
  updated_at: string;
  candidateProfileId: CandidateProfile;
  jobListingJobId: JobListing;
}

export type GetManyApplicationsResponse = Application[];
