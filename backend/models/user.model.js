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
});

export const User = mongoose.model("User", _schema);
