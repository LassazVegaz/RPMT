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

// GET /:id
// get a submission
_router.get("/:id", async (req, res) => {
	try {
		const submission = await submissionsService.getSubmission(
			req.params.id
		);
		res.json(submission);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

// POST /:id/marks
// give marks to a submission
_router.post("/:id/marks", async (req, res) => {
	try {
		const submission = await submissionsService.submitMarks(
			req.params.id,
			req.body
		);
		res.status(200).json(submission);
	} catch (error) {
		res.status(500).json({ message: error.message, error });
	}
});

export const submissionsRouter = _router;
