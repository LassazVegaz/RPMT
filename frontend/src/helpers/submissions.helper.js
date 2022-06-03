import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const createSubmission = async (submission) => {
	const res = await axiosApp.post(endpoints.projects.submissions, submission);
	return res.data;
};

export const submissionsHelper = {
	createSubmission,
};
