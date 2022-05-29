import mongoose from "mongoose";

const _schema = mongoose.Schema({
	_id: false,
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
});

_schema.virtual("supervisor", {
	ref: "Supervisor",
	localField: "supervisorId",
});

export const ProjectSupervisor = mongoose.model("ProjectSupervisor", _schema);
