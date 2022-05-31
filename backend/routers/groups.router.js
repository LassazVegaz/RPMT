import express from "express";
import { groupsService } from "../services/group.service";
import { studentService } from "../services/student.service";

const _router = express.Router();

// POST /
_router.post("/", async (req, res) => {
	try {
		let group = await groupsService.createGroup(req.body);

		for (const studentId of req.body.students) {
			await studentService.assignGroup(studentId, group.id);
		}

		group = await groupsService.getGroup(group.id);

		res.send(group);
	} catch (error) {
		res.status(500).send(error);
	}
});

// GET /:id
// get group by id
_router.get("/:id", async (req, res) => {
	try {
		const group = await groupsService.getGroup(req.params.id);
		res.send(group);
	} catch (error) {
		res.status(500).send(error);
	}
});

export const groupsRouter = _router;
