import mongoose from "mongoose";

const _schema = mongoose.Schema({
	type: { type: String, required: true },
	areas: [
		{
			type: mongoose.Types.ObjectId,
			ref: "MarkingSchemaArea",
		},
	],
});

export const MarkingSchema = mongoose.model("MarkingSchema", _schema);
