import express from "express";
import { submissionsService } from "../services/submissions.service";

const _router = express.Router();

// POST /
// create submission
_router.post("/", async (req, res) => {
	try {
		const submission = await submissionsService.createSumission(req.body);
		res.send(submission);
	} catch (error) {
		res.status(500).send(error);
	}
});

// GET /
// get all submissions
_router.get("/", async (req, res) => {
	try {
		const submissions = await submissionsService.getSubmissions();
	} catch (error) {
		res.status(500).send(error);
	}
});

export const submissionsRouter = _router;
