import mongoose from "mongoose";

const _schema = mongoose.Schema(
	{
		submissionId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		areaId: {
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

_schema.index({ submissionId: 1, areaId: 1 }, { unique: true });

_schema.virtual("submission", {
	ref: "Submission",
	localField: "submissionId",
	foreignField: "_id",
	justOne: true,
});

_schema.virtual("markingSchemaArea", {
	ref: "MarkingSchemaArea",
	localField: "areaId",
	foreignField: "_id",
	justOne: true,
});
