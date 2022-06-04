import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const getSubmission = async (submissionId) => {
	const url = `${endpoints.submissions.common}/${submissionId}`;
	const res = await axiosApp.get(url);
	return res.data;
};

const submitMarks = async (submissionId, marks) => {
	const url = endpoints.submissions.marks.replace("{id}", submissionId);
	const res = await axiosApp.post(url, marks);
	return res.data;
};

const createSubmission = async (submission) => {
	const res = await axiosApp.post(endpoints.projects.submissions, submission);
	return res.data;
};

export const submissionsHelper = {
	getSubmission,
	submitMarks,
	createSubmission,
};
