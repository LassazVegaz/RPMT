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

export const supervisorHelpers = {
	createSupervisor,
	getAllSupervisors,
	updateSupervisor,
	getProjects,
};
