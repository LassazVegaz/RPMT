import { MarkingSchema } from "../models/marking-schema.model";
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

const getSubmission = async (submissionId) => {
	let submission = await Submission.findById(submissionId).populate({
		path: "project",
		populate: {
			path: "group",
		},
	});
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
