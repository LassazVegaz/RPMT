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

_schema.virtual("staffMember", {
	ref: "staffMember",
	localField: "staffMemberId",
});

_schema.virtual("group", {
	ref: "Group",
	localField: "GroupID",
});

export const ProjectSupervisor = mongoose.model("PanelMemberGroup", _schema);
