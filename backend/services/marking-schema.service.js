import { MarkingSchemaArea } from "../models/marking-schema-area.model";
import { MarkingSchema } from "../models/marking-schema.model";

const createMarkingSchema = async (markingSchema) => {
	const areas = markingSchema.areas;
	delete markingSchema.areas;

	const _newEntry = new MarkingSchema(markingSchema);

	if (areas) {
		for (const area of areas) {
			const _area = await createMarkingSchemaArea(area);
			_newEntry.areas.push(_area);
		}
	}

	await _newEntry.save();

	return _newEntry;
};

const createMarkingSchemaArea = async (area) => {
	const _newEntry = new MarkingSchemaArea(area);

	await _newEntry.save();

	return _newEntry;
};

export const markingSchemaServices = {
	createMarkingSchema,
};
