import mongoose from "mongoose";

const _schema = mongoose.Schema({
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
});

_schema.virtual("project", {
	ref: "Project",
	localField: "projectId",
});

export const Submission = mongoose.model("Submission", _schema);
