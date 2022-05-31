import express from "express";
import { submissionTypesService } from "./submission-types.service";

const _router = express.Router();

// POST /
// create submission type
_router.post("/", async (req, res) => {
	try {
		const submissionType = await submissionTypesService.createSubmssionType(
			req.body
		);
		return submissionType;
	} catch (error) {
		res.status(500).send(error);
	}
});

export const submissionTypesRouter = _router;
