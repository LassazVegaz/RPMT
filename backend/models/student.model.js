import mongoose from "mongoose";

const _schema = mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			unique: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		gender: {
			type: String,
			required: true,
			enum: ["male", "female"],
		},
		photo: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		groupId: {
			type: mongoose.Schema.Types.ObjectId,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

_schema.virtual("user", {
	ref: "User",
	localField: userId,
	foreignField: "_id",
	justOne: true,
});

_schema.virtual("group", {
	ref: "Group",
	localField: groupId,
	foreignField: "_id",
	justOne: true,
});

export const Student = mongoose.model("Student", _schema);
