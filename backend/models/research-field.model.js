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

_schema.virtual("supervisors", {
	ref: "Supervisor",
	localField: "_id",
	foreignField: "researchFieldId",
});

export const ResearchField = mongoose.model("ResearchField", _schema);
