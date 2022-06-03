import { useApi } from "./api.hook";
import { supervisorsHelpers } from "../helpers/project.helper";

export const useProject = () => {
  const { callApi } = useApi();

  const assignSupervisor = async (projectId, coSupervisorId) => {
    try {
      await callApi(async () => {
        await supervisorsHelpers.assignSupervisor(projectId, coSupervisorId);
      });
      return true;
    } catch (error) {
      return false;
    }
  };
  return {
    assignSupervisor,
  };
};
