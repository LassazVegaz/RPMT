import mongoose from "mongoose";

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
		submissionTypeId: {
			type: mongoose.Schema.Types.ObjectId,
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
	localField: "submissionTypeId",
	foreignField: "_id",
	justOne: true,
});

export const Submission = mongoose.model("Submission", _schema);
