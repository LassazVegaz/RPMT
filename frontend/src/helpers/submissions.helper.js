import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const getSubmission = async (submissionId) => {
	const url = `${endpoints.supervisors.submissions}/${submissionId}`;
	const res = await axiosApp.get(url);
	return res.data;
};

export const submissionsHelper = {
	getSubmission,
};
