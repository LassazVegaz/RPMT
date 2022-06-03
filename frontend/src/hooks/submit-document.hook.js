import { useApi } from "./api.hook";
import { submissionsHelper } from "../helpers/submit-document.helper";

export const useSubmissions = () => {
  const { callApi } = useApi();

  const createSumission = async (submissions) => {
    try {
      await callApi(async () => {
        await submissionsHelper.createSumission(submissions);
      });
      return true;
    } catch (error) {
      return false;
    }
  };
  return {
    createSumission,
  };
};
