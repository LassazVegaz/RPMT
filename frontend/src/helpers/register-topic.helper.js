import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const registerTopic = async (topic) => {
  const res = await axiosApp.post(endpoints.projects.common, topic);
  return res.data;
};

export const registerTopicHelper = {
  registerTopic,
};
