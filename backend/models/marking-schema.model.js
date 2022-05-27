import mongoose from "mongoose";

const _schema = mongoose.Schema({
	type: String,
	areas: [
		{
			type: mongoose.Types.ObjectId,
			ref: "MarkingSchemaArea",
		},
	],
});

export const MarkingSchema = mongoose.model("MarkingSchema", _schema);
