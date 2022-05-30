import { ResearchField } from "../models/research-field.model";
import { supervisorsService } from "./supervisors.service";

const getResearchFields = async () => {
	return ResearchField.find();
};

const getSupervisorsOfResearchField = async (researchFieldId) => {
	const supervisorIds = await ResearchField.findById(researchFieldId)
		.populate("supervisors")
		.select("supervisors.id");

	const supervisors = [];
	for (const id of supervisorIds) {
		const supervisor = await supervisorsService.getSupervisor(id);
		supervisors.push(supervisor);
	}
};

export const researchFieldsService = {
	getResearchFields,
	getSupervisorsOfResearchField,
};
