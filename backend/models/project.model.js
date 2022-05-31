import mongoose from "mongoose";
import { SUPERVISOR_STATUS } from "../constants/project-supervisor-status.constant";

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
			id: mongoose.Schema.Types.ObjectId,
			status: {
				type: String,
				enum: [
					SUPERVISOR_STATUS.pending,
					SUPERVISOR_STATUS.accepted,
					SUPERVISOR_STATUS.rejected,
				],
			},
		},
		coSupervisorId: {
			id: mongoose.Schema.Types.ObjectId,
			status: {
				type: String,
				enum: [
					SUPERVISOR_STATUS.pending,
					SUPERVISOR_STATUS.accepted,
					SUPERVISOR_STATUS.rejected,
				],
			},
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

export const Project = mongoose.model("Project", _schema);
