import mongoose from "mongoose";

const _schema = mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true,
	},
});

export const ResearchField = mongoose.model("ResearchField", _schema);
