import mongoose from "mongoose";

const _schema = mongoose.Schema(
	{
		status: {
			type: String,
			enum: [
				"selecting-supervisor",
				"pedning-supervisor",
				"selecting-co-supervisor",
				"pending-co-supervisor",
				"creating-topic-document",
				"pending-topic-document-marks",
				"creating-presentation",
				"pending-presentation-marks",
				"creating-thesis",
				"pending-thesis-marks",
			],
		},
		topic: {
			type: String,
			required: true,
		},
		researchFieldId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		supervisorId: {
			type: mongoose.Schema.Types.ObjectId,
		},
		coSupervisorId: {
			type: mongoose.Schema.Types.ObjectId,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

_schema.virtual("researchField", {
	ref: "ResearchField",
	localField: "researchFieldId",
	foreignField: "_id",
	justOne: true,
});

_schema.virtual("group", {
	ref: "Group",
	localField: "_id",
	foreignField: "projectId",
	justOne: true,
});

_schema.virtual("submissions", {
	ref: "Submission",
	localField: "_id",
	foreignField: "projectId",
});

_schema.virtual("supervisor", {
	ref: "Supervisor",
	localField: "supervisorId",
	foreignField: "_id",
	justOne: true,
});

_schema.virtual("coSupervisor", {
	ref: "Supervisor",
	localField: "coSupervisorId",
	foreignField: "_id",
	justOne: true,
});

export const Project = mongoose.model("Project", _schema);
