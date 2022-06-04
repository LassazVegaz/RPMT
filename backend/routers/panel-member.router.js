import express from "express";
import { auth } from "../middleware/auth.middleware";
import { panelMemberServices } from "../services/panel-member.service";

const _rouuter = express.Router();

// GET /groups
// get assigned groups
_rouuter.get("/groups", auth(), async (req, res) => {
	try {
		const groups = await panelMemberServices.getAssignedGroups(req.user.id);
		res.status(200).json(groups);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

export const panelMemberRouter = _rouuter;
