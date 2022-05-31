import express from "express";
import { researchFieldsService } from "../services/research-fields.service";

const _router = express.Router();

// GET /
// get all research fields
_router.get("/", async (req, res) => {
	try {
		const researchFields = await researchFieldsService.getResearchFields();
		res.json(researchFields);
	} catch (error) {
		res.status(500).send(error);
	}
});

// GET /supervisors/:id
// get supervisors of research field
_router.get("/:id/supervisors", async (req, res) => {
	try {
		const { id } = req.params;
		const supervisors =
			await researchFieldsService.getSupervisorsOfResearchField(id);
		res.json(supervisors);
	} catch (error) {
		res.status(500).send(error);
	}
});

export const researchFieldsRouter = _router;
