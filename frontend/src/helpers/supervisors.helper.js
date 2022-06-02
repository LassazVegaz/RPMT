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

export const supervisorHelpers = {
	createSupervisor,
	getAllSupervisors,
};
