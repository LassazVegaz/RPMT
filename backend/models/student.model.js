import mongoose from "mongoose";

const _schema = mongoose.Schema({
	_id: false,
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
});

_schema.virtual("user", {
	ref: "User",
	localField: userId,
});

_schema.virtual("group", {
	ref: "Group",
	localField: groupId,
});

export const Student = mongoose.model("Student", _schema);
