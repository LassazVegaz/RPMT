import mongoose from "mongoose";

const _schema = mongoose.Schema({
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	role: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Role",
	},
});

export const User = mongoose.model("User", _schema);
