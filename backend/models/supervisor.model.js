import mongoose from "mongoose";

const _schema = mongoose.Schema(
	{
		staffMemberId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			unique: true,
		},
		researchFieldIds: [
			{
				type: mongoose.Schema.Types.ObjectId,
				required: true,
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

_schema.virtual("staffMember", {
	ref: "StaffMember",
	localField: "staffMemberId",
	foreignField: "_id",
	justOne: true,
});

_schema.virtual("researchFields", {
	ref: "ResearchField",
	localField: "researchFieldIds",
	foreignField: "_id",
});

_schema.virtual("supervisingProjects", {
	ref: "Project",
	localField: "_id",
	foreignField: "supervisorId",
});

_schema.virtual("coSupervisingProjects", {
	ref: "Project",
	localField: "_id",
	foreignField: "coSupervisorId",
});

export const Supervisor = mongoose.model("Supervisor", _schema);
