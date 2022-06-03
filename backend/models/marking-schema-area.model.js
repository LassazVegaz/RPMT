import mongoose from "mongoose";

const _schema = mongoose.Schema(
	{
		name: { type: String, required: true },
		allocatedMarks: { type: Number, required: true },
		markingSchemaName: {
			type: String,
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
	localField: "markingSchemaId",
	foreignField: "_id",
	justOne: true,
});

export const MarkingSchemaArea = mongoose.model("MarkingSchemaArea", _schema);
