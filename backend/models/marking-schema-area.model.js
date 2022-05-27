import mongoose from "mongoose";

const _schema = mongoose.Schema({
	name: { type: String, required: true },
	allocatedMarks: { type: Number, required: true },
});

export const MarkingSchemaArea = mongoose.model("MarkingSchemaArea", _schema);
