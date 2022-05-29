import mongoose from "mongoose";

const _schema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
});

_schema.virtual("markingSchemaAreas", {
	ref: "MarkingSchemaArea",
	localField: "_id",
});

export const MarkingSchema = mongoose.model("MarkingSchema", _schema);
