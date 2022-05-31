import { ResearchField } from "../models/research-field.model";
import { supervisorsService } from "./supervisors.service";

const getResearchFields = async () => {
	return ResearchField.find();
};

const getSupervisorsOfResearchField = async (researchFieldId) => {
	const reasearchField = await ResearchField.findById(
		researchFieldId
	).populate("supervisors");

	const supervisors = [];
	for (const _sup of reasearchField.supervisors) {
		const supervisor = await supervisorsService.getSupervisor(_sup.id);
		supervisors.push(supervisor);
	}

	return supervisors;
};

export const researchFieldsService = {
	getResearchFields,
	getSupervisorsOfResearchField,
};
