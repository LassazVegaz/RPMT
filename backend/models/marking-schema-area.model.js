import mongoose from "mongoose";

const _schema = mongoose.Schema({
	name: { type: String, required: true },
	allocatedMarks: { type: Number, required: true },
	markingSchemaId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
});

_schema.virtual("markingSchema", {
	ref: "MarkingSchema",
	localField: "markingSchemaId",
});

export const MarkingSchemaArea = mongoose.model("MarkingSchemaArea", _schema);
