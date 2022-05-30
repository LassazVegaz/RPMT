import mongoose from "mongoose";

const _schema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	projectId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
});

_schema.virtual("students", {
	ref: "Student",
	localField: _id,
	foreignField: "groupId",
});

_schema.virtual("project", {
	ref: "Project",
	localField: "projectId",
	foreignField: "_id",
	justOne: true,
});

export const Supervisor = mongoose.model("Group", _schema);
