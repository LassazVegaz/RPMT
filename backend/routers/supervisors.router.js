import express from "express";
import { auth } from "../middleware/auth.middleware";
import { staffMembersService } from "../services/staff-members.service";
import { supervisorsService } from "../services/supervisors.service";
import { usersService } from "../services/users.service";

const _router = express.Router();

// POST /
// Create a supervisor
_router.post("/", async (req, res) => {
	try {
		const user = await usersService.createUser(req.body);
		const staffMember = await staffMembersService.createStaffMember(
			user,
			req.body
		);
		const supervisor = await supervisorsService.createSupervisor(
			staffMember,
			req.body
		);
		res.json(supervisor);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// GET /:id
// get a supervisor
_router.get("/:id", async (req, res) => {
	try {
		const supervisor = await supervisorsService.getSupervisor(
			req.params.id
		);
		res.json(supervisor);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// GET /
// get all supervisors
_router.get("/", async (req, res) => {
	try {
		const supervisors = await supervisorsService.getAllSupervisors({
			supervisorsOnly: req.query.supervisorsOnly,
			coSupervisorsOnly: req.query.coSupervisorsOnly,
		});
		res.json(supervisors);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// DELETE /:id
// delete a supervisor
_router.delete("/:id", async (req, res) => {
	try {
		const supervisor = await supervisorsService.getSupervisor(
			req.params.id
		);
		await supervisorsService.deleteSupervisor(req.params.id);

		const staffMember = await staffMembersService.getStaffMember(
			supervisor.staffMemberId
		);
		await staffMembersService.deleteStaffMember(staffMember.id);

		const user = await usersService.getUser(staffMember.userId);
		await usersService.deleteUser(user.id);

		res.json({ message: "Supervisor deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// POST /:id/research-fields
// assign a supervisor to a research field
_router.post("/:id/research-fields", async (req, res) => {
	try {
		const supervisor =
			await supervisorsService.assignSupervisorToResearchField(
				req.params.id,
				req.body.researchFieldId
			);
		res.json(supervisor);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// DELETE /:id/research-fields/:researchFieldId
// remove a supervisor from a research field
_router.delete("/:id/research-fields/:researchFieldId", async (req, res) => {
	try {
		const supervisor =
			await supervisorsService.removeSupervisorFromResearchField(
				req.params.id,
				req.params.researchFieldId
			);
		res.json(supervisor);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// PUT /:id
// update a supervisor
_router.put("/:id", async (req, res) => {
	try {
		let supervisor = await supervisorsService.updateSupervisor(
			req.params.id,
			req.body
		);
		await staffMembersService.updateStaffMember(
			supervisor.staffMemberId,
			req.body
		);
		supervisor = await supervisorsService.getSupervisor(req.params.id);

		res.json(supervisor);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// GET /:id/projects
// get all projects supervised by a supervisor
_router.get("/:id/projects", auth(), async (req, res) => {
	try {
		const projects = await supervisorsService.getProjects(
			req.params.id,
			req.query.status
		);
		res.json(projects);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// POST /:id/projects/:projectId/accept
// accept a project
_router.patch("/:id/projects/:projectId/accept", async (req, res) => {
	try {
		await supervisorsService.acceptProject(req.params.projectId);
		res.status(200).send();
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// POST /:id/projects/:projectId/reject
// reject a project
_router.patch("/:id/projects/:projectId/reject", async (req, res) => {
	try {
		await supervisorsService.rejectProject(req.params.projectId);
		res.status(200).send();
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

export const supervisorsRouter = _router;
