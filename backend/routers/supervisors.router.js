import express from "express";
import { staffMembersService } from "../services/staff-members.service";
import { supervisorsService } from "../services/supervisors.service";
import { usersService } from "../services/users.service";

const _router = express.Router();

// POST /
// Create a supervisor
_router.post("/", async (req, res) => {
	try {
		req.body.role = req.body.supervisor ? "supervisor" : "co-supervisor";
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

// GET /:id/projects
// get a supervisor's projects
_router.get("/:id/projects", async (req, res) => {
	try {
		const projects = await supervisorsService.getSupervisorProjects(
			req.params.id,
			req.query.pending
		);
		res.json(projects);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// PUT /:id
// update a supervisor
_router.put("/:id", async (req, res) => {
	try {
		let supervisor = await supervisorsService.getSupervisor(req.params.id);
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

export const supervisorsRouter = _router;
