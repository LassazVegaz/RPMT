import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const createSumission = async (submissions) => {
  const res = await axiosApp.post(endpoints.submissions.common, submissions);
  return res.data;
};

export const submissionsHelper = {
  createSumission,
};
