import { useApi } from "./api.hook";
import { registerTopicHelper } from "../helpers/register-topic.helper";

export const useTopic = () => {
  const { callApi } = useApi();

  const registerTopic = async (topic) => {
    try {
      await callApi(async () => {
        await registerTopicHelper.registerTopic(topic);
      });
      return true;
    } catch (error) {
      return false;
    }
  };
  return {
    registerTopic,
  };
};
