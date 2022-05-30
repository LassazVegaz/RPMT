import mongoose from "mongoose";

const _schema = mongoose.Schema(
	{
		type: {
			type: String,
			enum: ["presentation", "thesis", "topic-document"],
			required: true,
		},
		document: {
			type: String,
			required: true,
			unique: true,
		},
		projectId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		markingSchemaId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

_schema.virtual("project", {
	ref: "Project",
	localField: "projectId",
	foreignField: "_id",
	justOne: true,
});

_schema.virtual("markingSchema", {
	ref: "MarkingSchema",
	localField: "markingSchemaId",
	foreignField: "_id",
	justOne: true,
});

export const Submission = mongoose.model("Submission", _schema);
