import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const assignSupervisor = async (projectId, coSupervisorId) => {
  const response = await axiosApp.patch(
    endpoints.projects.supervisor.replace("{id}", projectId),

    { coSupervisorId }
  );
  return response.data;
};

export const supervisorsHelpers = {
  assignSupervisor,
};
