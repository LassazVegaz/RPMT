import express from "express";
import { projectsService } from "../services/projects.service";

const _router = express.Router();

// POST /
// Create a project
_router.post("/", async (req, res) => {
	try {
		const project = await projectsService.createProject(req.body);
		res.json(project);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// GET /
// Get all projects
_router.get("/", async (req, res) => {
	try {
		const projects = await projectsService.getProjects();
		res.json(projects);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

export const projectsRouter = _router;
