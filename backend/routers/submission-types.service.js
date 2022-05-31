import { SubmissionType } from "../models/submission-type.model";

const createSubmssionType = async (submissionType) => {
	submissionType = {
		name: submissionType.name,
	};

	const _newEntity = new SubmissionType(submissionType);
	await _newEntity.save();

	return getSubmissionType(_newEntity.id);
};

const getSubmissionType = async (id) => {
	const submissionType = await SubmissionType.findById(id).populate(
		"markingSchema"
	);
	return submissionType;
};

const getSubmissionTypes = async () => {
	const submissionTypes = await SubmissionType.find().populate(
		"markingSchema"
	);
	return submissionTypes;
};

export const submissionTypesService = {
	createSubmssionType,
	getSubmissionType,
	getSubmissionTypes,
};
