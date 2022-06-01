import { MarkingSchemaArea } from "../models/marking-schema-area.model";
import { MarkingSchema } from "../models/marking-schema.model";

const createMarkingSchema = async (markingSchema) => {
	const areas = markingSchema.areas;
	delete markingSchema.areas;

	const _newEntry = new MarkingSchema(markingSchema);
	await _newEntry.save();

	if (areas) {
		for (const area of areas) {
			area.markingSchemaId = _newEntry.id;
			await createMarkingSchemaArea(area);
		}
	}
	return _newEntry;
};

const createMarkingSchemaArea = async (area) => {
	const _newEntry = new MarkingSchemaArea(area);

	await _newEntry.save();

	return _newEntry;
};

const getMarkingSchemas = async () => {
	const schemas = await MarkingSchema.find().populate("markingSchemaAreas");
	return schemas;
	
}

const getMarkingSchema = async (id) => {
	const schema = await MarkingSchema.findById(id).populate("markingSchemaAreas");
	return schema;
}



export const markingSchemaServices = {
	createMarkingSchema,
	getMarkingSchemas,
	getMarkingSchema
};
