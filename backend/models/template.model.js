import mongoose from "mongoose";

const _schema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		document: {
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

export const Template = mongoose.model("Template", _schema);
