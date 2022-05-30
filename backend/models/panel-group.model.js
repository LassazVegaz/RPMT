import mongoose from "mongoose";

const _schema = mongoose.Schema({
	groupId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	staffMemberId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
});

_schema.index({ groupId: 1, staffMemberId: 1 }, { unique: true });

_schema.virtual("staffMember", {
	ref: "StaffMember",
	localField: "staffMemberId",
	foreignField: "_id",
	justOne: true,
});

_schema.virtual("group", {
	ref: "Group",
	localField: "groupId",
	foreignField: "_id",
	justOne: true,
});

export const ProjectSupervisor = mongoose.model("PanelMemberGroup", _schema);
