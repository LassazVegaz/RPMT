import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const getSubmission = async (submissionId) => {
	const url = `${endpoints.submissions.common}/${submissionId}`;
	const res = await axiosApp.get(url);
	return res.data;
};

const submitMarks = async (submissionId, marks) => {
	const url = `${endpoints.submissions.common}/${submissionId}`;
	const res = await axiosApp.post(url, marks);
	return res.data;
};

export const submissionsHelper = {
	getSubmission,
	submitMarks,
};
