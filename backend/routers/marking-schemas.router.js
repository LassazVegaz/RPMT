import express from "express";
import { markingSchemaServices } from "../services/marking-schema.service";

const _router = express.Router();

// POST /
// create marking schema
_router.post("/", async (req, res) => {
	try {
		const newMS = await markingSchemaServices.createMarkingSchema(req.body);
		res.send(newMS);
	} catch (error) {
		res.status(400).send(error);
	}
});

export const markingSchemasRouter = _router;
