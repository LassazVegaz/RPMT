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
		res.status(500).json({message: error.message, error});
	}
});

//GET

_router.get("/", async (req, res) => {
	try{
		const schemas = await markingSchemaServices.getMarkingSchemas();
		res.json(schemas);
	} catch {
		res.status(500).json({message: error.message, error});
	}
});

//Get / :id

_router.get("/:id", async (req,res) => {
	try{
		const schema = await markingSchemaServices.getMarkingSchema(
		req.params.id
	 );
	res.json(schema);
	} catch {
		res.status(500).json({message: error.message, error});
	}
})

export const markingSchemasRouter = _router;
