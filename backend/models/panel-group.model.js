import mongoose from "mongoose";

const _schema = mongoose.Schema({
	_id: false,
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
});

_schema.virtual("group", {
	ref: "Group",
	localField: "groupId",
});

export const ProjectSupervisor = mongoose.model("PanelMemberGroup", _schema);
