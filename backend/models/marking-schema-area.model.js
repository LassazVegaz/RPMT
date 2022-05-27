import mongoose from "mongoose";

const _schema = mongoose.Schema({
	name: mongoose.SchemaTypes.String,
	allocatedMarks: mongoose.SchemaTypes.Number,
});

export const MarkingSchemaArea = mongoose.model("MarkingSchemaArea", _schema);
