import { Submission } from "../models/submission.model";

const createSumission = async (submission) => {
	submission = {
		document: submission.document,
		projectId: submission.projectId,
		submissionTypeId: submission.submissionTypeId,
	};

	const _submission = new Submission(submission);
	_submission.save();

	return getSubmission(_submission.id);
};

const getSubmission = async (id) => {
	const submission = await Submission.findById(id)
		.populate("submissionType")
		.populate("project");

	return submission;
};

const getSubmissions = async () => {
	const submissions = await Submission.find()
		.populate("submissionType")
		.populate("project");

	return submissions;
};

export const submissionsService = {
	createSumission,
	getSubmissions,
};
