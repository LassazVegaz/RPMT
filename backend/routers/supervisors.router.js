import express from "express";
import { staffMembersService } from "../services/staff-members.service";
import { supervisorsService } from "../services/supervisors.service";
import { usersService } from "../services/users.service";

const _router = express.Router();

// POST /
// Create supervisor
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
		const supervisors = await supervisorsService.getAllSupervisors();
		res.json(supervisors);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

export const supervisorsRouter = _router;
