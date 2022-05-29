import mongoose from "mongoose";

const _schema = mongoose.Schema({
	_id: false,
	staffMemberId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		unique: true,
	},
	type: {
		type: String,
		required: true,
		enum: ["supervisor", "co-supervisor"],
	},
});

_schema.virtual("staffMember", {
	ref: "StaffMember",
	localField: "staffMemberId",
	foreignField: "userId",
});

export const Supervisor = mongoose.model("Supervisor", _schema);
