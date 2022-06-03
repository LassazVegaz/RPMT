import mongoose from "mongoose";

const _schema = mongoose.Schema(
	{
		name: {
			type: String,
			unique: true,
			required: true,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

_schema.virtual("markingSchema", {
	ref: "MarkingSchema",
	localField: "name",
	foreignField: "name",
	justOne: true,
});

export const SubmissionType = mongoose.model("SubmissionType", _schema);
