import mongoose from "mongoose";

const _schema = mongoose.Schema({
	type: { type: String, required: true, unique: true },
});

_schema.virtual("markingSchemaArea", {
	ref: "MarkingSchemaArea",
	localField: "_id",
});

export const MarkingSchema = mongoose.model("MarkingSchema", _schema);
