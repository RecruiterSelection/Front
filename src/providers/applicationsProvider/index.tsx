import { createContext, useState } from "react";
import {
  ApplicationData,
  CreateNewApplication,
  GetManyApplicationsResponse,
  IApplicationContext,
  IDefaultProviderProps,
} from "./interfaces";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const ApplicationsContext = createContext({} as IApplicationContext);

export const ApplicationsProvider = ({ children }: IDefaultProviderProps) => {
  const [applicationsData, setApplicationsData] =
    useState<GetManyApplicationsResponse>([]);

  const getAllApplications = async (): Promise<
    GetManyApplicationsResponse | undefined
  > => {
    try {
      const response = await api.get<GetManyApplicationsResponse>(
        "/applications"
      );
      console.log(response.data, "getAllApplications");
      setApplicationsData(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createNewApplication = async (
    data: ApplicationData,
    candidateId: number,
    jobId: number
  ): Promise<CreateNewApplication | undefined> => {
    try {
      const response = await api.post(
        `/applications/${candidateId}/${jobId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
          },
        }
      );

      getAllApplications();
      console.log(response.data, "createNewApplication");
      toast.success("Candidatura realizada com sucesso!");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteApplication = async (applicationId: number): Promise<void> => {
    try {
      await api.delete(`/applications/${applicationId}`);
      toast.warn("Candidatura retirada.");
      getAllApplications();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ApplicationsContext.Provider
      value={{
        getAllApplications,
        applicationsData,
        deleteApplication,
        createNewApplication,
      }}>
      {children}
    </ApplicationsContext.Provider>
  );
};
