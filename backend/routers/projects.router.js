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

// GET /:id
// get one project
_router.get("/:id", async (req, res) => {
	try {
		const project = await projectsService.getProject(req.params.id);
		res.send(project);
	} catch (error) {
		res.status(500).send(error);
	}
});

// GET /:id/supervisors
_router.get("/:id/supervisors", async (req, res) => {
	try {
		const supervisors = await projectsService.getSupervisors(req.params.id);
		res.send(supervisors);
	} catch (error) {
		res.status(500).send(error);
	}
});

// PATCH /:id/supervisors
// assign supervisors
_router.patch("/:id/supervisors", async (req, res) => {
	try {
		const project = await projectsService.assignSupervisors({
			projectId: req.params.id,
			supervisorId: req.body.supervisorId,
			coSupervisorId: req.body.coSupervisorId,
		});
		res.send(project);
	} catch (error) {
		res.status(500).send(error);
	}
});

export const projectsRouter = _router;
