import mongoose from "mongoose";

const _schema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		projectId: {
			type: mongoose.Schema.Types.ObjectId,
		},
		panelMemberId: {
			type: mongoose.Schema.Types.ObjectId,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

_schema.virtual("students", {
	ref: "Student",
	localField: "_id",
	foreignField: "groupId",
});

_schema.virtual("project", {
	ref: "Project",
	localField: "projectId",
	foreignField: "_id",
	justOne: true,
});

_schema.virtual("panelMember", {
	ref: "StaffMember",
	localField: "panelMemberId",
	foreignField: "_id",
	justOne: true,
});

export const Group = mongoose.model("Group", _schema);
