import mongoose from "mongoose";

const _schema = mongoose.Schema({
	name: String,
	allocatedMarks: Number,
});

export const MarkingSchemaArea = mongoose.model("MarkingSchemaArea", _schema);
