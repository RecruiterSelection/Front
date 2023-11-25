import { createContext, useState } from "react";
import {
  GetManyApplicationsResponse,
  IApplicationContext,
  IDefaultProviderProps,
} from "./interfaces";
import { api } from "../../services/api";

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

  return (
    <ApplicationsContext.Provider
      value={{ getAllApplications, applicationsData }}>
      {children}
    </ApplicationsContext.Provider>
  );
};