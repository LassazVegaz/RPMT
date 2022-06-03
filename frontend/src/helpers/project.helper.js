import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const assignSupervisor = async (projectId, coSupervisorId) => {
	const response = await axiosApp.patch(
		endpoints.projects.supervisor.replace("{id}", projectId),

		{ coSupervisorId }
	);
	return response.data;
};

const getProject = async (id) => {
	const response = await axiosApp.get(`${endpoints.projects.common}/${id}`);
	return response.data;
};

export const supervisorsHelpers = {
	assignSupervisor,
	getProject,
};
