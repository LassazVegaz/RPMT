import mongoose from "mongoose";

const _schema = mongoose.Schema({
	topicFeedback: Boolean,
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
});

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
});

_schema.virtual("submissions", [
	{
		ref: "Submission",
		localField: "_id",
	},
]);

export const Project = mongoose.model("Project", _schema);
