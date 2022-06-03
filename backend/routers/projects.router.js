import express from "express";
import { auth } from "../middleware/auth.middleware";
import { groupsService } from "../services/group.service";
import { projectsService } from "../services/projects.service";

const _router = express.Router();

// POST /
// Create a project
_router.post("/", auth(), async (req, res) => {
	try {
		const project = await projectsService.createProject(req.body);

		if (req.body.supervisorId || req.body.coSupervisorId)
			await projectsService.assignSupervisors({
				projectId: project.id,
				supervisorId: req.body.supervisorId,
				coSupervisorId: req.body.coSupervisorId,
			});

		await groupsService.addProjectToGroup(req.user.groupId, project.id);

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
