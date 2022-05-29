import mongoose from "mongoose";

const _schema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	markingSchemaId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		unique: true,
	},
});

_schema.virtual("markingSchema", {
	ref: "MarkingSchema",
	localField: "markingSchemaId",
});

export const SubmissionType = mongoose.model("SubmissionType", _schema);
