import mongoose from "mongoose";

const _schema = mongoose.Schema({
	_id: false,
	name: {
		type: String,
		unique: true,
		required: true,
	},
});

export const Role = mongoose.model("Role", _schema);
