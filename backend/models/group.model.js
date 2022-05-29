import mongoose from "mongoose";

const _schema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
});

_schema.virtual("students", [
	{
		ref: "Student",
		localField: _id,
		foreignField: "userId",
	},
]);

export const Supervisor = mongoose.model("Group", _schema);
