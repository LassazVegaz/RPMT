import { MarkingSchema } from "../models/marking-schema.model";
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

const getSubmission = async (submissionId) => {
	let submission = await Submission.findById(submissionId).populate({
		path: "project",
		populate: {
			path: "group",
		},
	});

	if (!submission) return null;

	const markingSchema = await MarkingSchema.findOne({
		name: submission.submissionTypeName,
	}).populate("markingSchemaAreas");

	submission = submission.toJSON();
	submission.markingSchema = markingSchema.toJSON();

	return submission;
};

const getSubmissions = async () => {
	const submissions = await Submission.find()
		.populate("submissionType")
		.populate("project");

	return submissions;
};

const submitMarks = async (submissionId, marks) => {
	const submission = await Submission.findById(submissionId);
	submission.marks = marks;
	await submission.save();

	return getSubmission(submissionId);
};

export const submissionsService = {
	createSumission,
	getSubmissions,
	getSubmission,
	submitMarks,
};
