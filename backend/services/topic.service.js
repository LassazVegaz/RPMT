import { Topic } from "../models/topic.model";

const createTopic = async (topic) => {
  const _topic = new Topic(topic);
  await _topic.save();
  return _topic.toJSON();
};

const getAllTopics = async () => {
  const topic = await Topic.find();
  return topic;
};

export const templateService = {
  createTopic,
  getAllTopics,
};
