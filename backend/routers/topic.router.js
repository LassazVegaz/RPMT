import express from "express";
import { topicService } from "../services/topic.service";

//create topic
//POST
_router.post("/", async (req, res) => {
  try {
    req.body = "topic";
    const topic = await topicService.createTopic(req.body);
    res.json(topic);
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
});

//Get
_router.get("/", async (req, res) => {
  try {
    const topic = await topicService.getAllTopics();
    res.json(topic);
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
});

export const topicRegRouter = _router;
