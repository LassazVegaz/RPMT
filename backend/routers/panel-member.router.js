import express from "express";
import { auth } from "../middleware/auth.middleware";
import { panelMemberServices } from "../services/panel-member.service";
import { usersService } from "../services/users.service";
import { staffMembersService } from "../services/staff-members.service";

const _router = express.Router();

// POST /
// Create a panel member
_router.post("/", async (req, res) => {
	try {
		const user = await usersService.createUser(req.body);
		const staffMember = await staffMembersService.createStaffMember(
			user,
			req.body
		);

		res.json(staffMember);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// PUT /:id
// update a panel member
_router.put("/", auth(), async (req, res) => {
	try {
		await staffMembersService.updateStaffMember(req.user.id, req.body);
		const panelMember = await staffMembersService.getStaffMember(
			req.user.id
		);

		res.json(panelMember);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// GET /groups
// get assigned groups
_router.get("/groups", auth(), async (req, res) => {
	try {
		const groups = await panelMemberServices.getAssignedGroups(req.user.id);
		res.status(200).json(groups);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

export const panelMemberRouter = _router;
