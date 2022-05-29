import mongoose from "mongoose";

const _schema = mongoose.Schema({
	_id: false,
	researchFieldId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	supervisorId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
});

_schema.index({ researchFieldId: 1, supervisorId: 1 }, { unique: true });

_schema.virual("researchField", {
	ref: "ResearchField",
	localField: "researchFieldId",
});

_schema.virual("supervisor", {
	ref: "Supervisor",
	localField: "supervisorId",
	foreignField: "staffMemberId",
});

export const SupervisorResearchField = mongoose.model(
	"SupervisorResearchField",
	_schema
);
