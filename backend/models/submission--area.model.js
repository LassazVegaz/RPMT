import mongoose from "mongoose";

const _schema = mongoose.Schema({
	_id: false,
	submissionId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	areaId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
});

_schema.index({ submissionId: 1, areaId: 1 }, { unique: true });

_schema.virtual("submission", {
	ref: "Submission",
	localField: "submissionId",
});

_schema.virtual("markingSchemaArea", {
	ref: "MarkingSchemaArea",
	localField: "areaId",
});
