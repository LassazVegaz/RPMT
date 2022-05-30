import mongoose from "mongoose";

const _schema = mongoose.Schema({
	projectId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	supervisorId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
});

_schema.index({ projectId: 1, supervisorId: 1 }, { unique: true });

_schema.virtual("project", {
	ref: "Project",
	localField: "projectId",
	foreignField: "_id",
	justOne: true,
});

_schema.virtual("supervisor", {
	ref: "Supervisor",
	localField: "supervisorId",
	foreignField: "_id",
	justOne: true,
});

export const ProjectSupervisor = mongoose.model("ProjectSupervisor", _schema);
