import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const createSupervisor = async (supervisor) => {
	const response = await axiosApp.post(
		endpoints.supervisors.common,
		supervisor
	);
	return response.data;
};

const getAllSupervisors = async () => {
	const response = await axiosApp.get(endpoints.supervisors.common);
	return response.data;
};

const updateSupervisor = async (id, supervisor) => {
	const url = `${endpoints.supervisors.common}/${id}`;
	const response = await axiosApp.put(url, supervisor);
	return response.data;
};

const getProjects = async (id, status = "all") => {
	const url = endpoints.supervisors.projects.replace("{id}", id);
	const res = await axiosApp.get(url, { params: { status } });
	return res.data;
};

const responseProject = async (id, projectId, response) => {
	const url = `${endpoints.supervisors.responseProjects
		.replace("{id}", id)
		.replace("{projectId}", projectId)}/${response}`;
	await axiosApp.patch(url);
};

const getSubmission = async (submissionId) => {
	const url = `${endpoints.supervisors.submissions}/${submissionId}`;
	const res = await axiosApp.get(url);
	return res.data;
};

const submitMarks = async (submissionId, marks) => {
	const url = `${endpoints.supervisors.submissions}/${submissionId}`;
	const res = await axiosApp.post(url, marks);
	return res.data;
};

export const supervisorHelpers = {
	createSupervisor,
	getAllSupervisors,
	updateSupervisor,
	getProjects,
	responseProject,
	getSubmission,
	submitMarks,
};
