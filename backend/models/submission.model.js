import mongoose from "mongoose";
import { mediaServices } from "../services/media.service";

const _schema = mongoose.Schema(
	{
		document: {
			type: String,
			required: true,
			unique: true,
		},
		projectId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		submissionTypeName: {
			type: String,
			required: true,
		},
		marks: [
			{
				area: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
					ref: "MarkingSchemaArea",
				},
				givenMarks: {
					type: Number,
					required: true,
				},
			},
		],
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

_schema.virtual("submissionType", {
	ref: "SubmissionType",
	localField: "submissionTypeName",
	foreignField: "name",
	justOne: true,
});

_schema.virtual("documentUrl").get(function () {
	return this.document
		? mediaServices.getSubmissionsURL(this.document)
		: null;
});

export const Submission = mongoose.model("Submission", _schema);
