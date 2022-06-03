import { Submission } from "../models/submission.model";
import { mediaServices } from "./media.service";

const createSumission = async (submission) => {
	if (submission.document) {
		submission.document = await mediaServices.saveSubmission(
			submission.document.data,
			submission.document.fileExtension
		);
	}

	submission = {
		document: submission.document,
		projectId: submission.projectId,
		submissionTypeName: submission.submissionTypeName,
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
