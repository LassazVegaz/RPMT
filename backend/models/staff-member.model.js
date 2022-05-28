import mongoose from "mongoose";

const _schema = mongoose.Schema({
	_id: false,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		unique: true,
		ref: "User",
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
});

export const StaffMember = mongoose.model("StaffMember", _schema);
